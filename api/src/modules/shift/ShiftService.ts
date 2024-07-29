import AppError from '@shared/errors/AppError';
import { UserService } from '@modules/user/UserService';
import { container, inject, injectable } from 'tsyringe';
import { formatDate, getHourFormated, hoursBetweenDates } from 'utils/date';
import IShiftsRepository from './repositories/IShiftsRepository';
import { ListUserShiftsDTO } from './dtos/ListUserShiftsDTO';

@injectable()
class ShiftService {
  constructor(
    @inject('ShiftsRepository')
    private repository: IShiftsRepository,
  ) {}

  async clockIn(userId: string) {
    const userService = container.resolve(UserService);
    const user = await userService.findById(userId);

    await this.repository.create(user);
  }

  async clockOut(shiftId: string) {
    const shift = await this.repository.findById(shiftId);

    if (!shift) {
      throw new AppError('Shift Not Found.', 404);
    }

    if (shift.isFinished) {
      throw new AppError('Already Finished', 400);
    }

    const shiftUpdated = { ...shift, clockOut: new Date(), isFinished: true };

    await this.repository.update(shiftUpdated);
  }

  async getUserHistory(userId: string) {
    const usersList = await this.repository.findAllByUser(userId);

    const response = usersList.map(({ id, clockIn, clockOut, created_at }) => {
      // eslint-disable-next-line no-new
      return new ListUserShiftsDTO(
        id,
        getHourFormated(clockIn),
        getHourFormated(clockOut),
        formatDate(clockIn),
        hoursBetweenDates(clockIn, clockOut),
        created_at,
      );
    });
    return response;
  }
}

export { ShiftService };
