import AppError from '@shared/errors/AppError';
import { UserService } from '@modules/user/UserService';
import { container, inject, injectable } from 'tsyringe';
import { formatDate, getHourFormated, hoursBetweenDates } from '@utils/date';
import IShiftsRepository from '@repositories/IShiftsRepository';
import { ListShiftsDTO } from './dtos/ListShiftsDTO';
import { ActiveShiftDTO } from './dtos/ActiveShiftDTO';

@injectable()
class ShiftService {
  constructor(
    @inject('ShiftsRepository')
    private repository: IShiftsRepository,
  ) {}

  async clockIn(user_id: string) {
    const userService = container.resolve(UserService);
    const user = await userService.findById(user_id);
    const hasActive = await this.repository.hasActiveShift(user_id);

    if (hasActive) {
      throw new AppError('User Already Has Shift Active.', 400);
    }

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

    const response = usersList.map(({ id, clockIn, clockOut, isFinished }) => {
      return new ListShiftsDTO(
        id,
        getHourFormated(clockIn),
        isFinished ? getHourFormated(clockOut) : null,
        formatDate(clockIn),
        isFinished ? hoursBetweenDates(clockIn, clockOut) : null,
      );
    });
    return response;
  }

  async getActiveShift(user_id: string) {
    const shift = await this.repository.findActiveByUser(user_id);

    if (shift) {
      const shiftDTO = new ActiveShiftDTO(shift.id, shift.clockIn);
      return shiftDTO;
    }

    return null;
  }
}

export { ShiftService };
