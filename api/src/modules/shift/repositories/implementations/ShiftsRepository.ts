import { Equal, Repository } from 'typeorm';
import { Shift } from '@modules/shift/entities/Shift';
import { AppDataSource } from '@database/index';
import { User } from '@modules/user/entities/User';
import IShiftsRepository from '../IShiftsRepository';

class ShiftsRepository implements IShiftsRepository {
  private repository: Repository<Shift>;

  constructor() {
    this.repository = AppDataSource.getRepository(Shift);
  }

  async hasActiveShift(user_id: string): Promise<boolean> {
    const hasActive = await this.repository.existsBy({
      user_id: Equal(user_id),
      isFinished: false,
    });

    return hasActive;
  }

  async findById(id: string): Promise<Shift | null> {
    const shift = await this.repository.findOneBy({ id });

    return shift;
  }

  async update(shift: Shift): Promise<void> {
    await this.repository.save(shift);
  }

  async create(user: User): Promise<void> {
    const shift = this.repository.create({
      user_id: user,
      clockIn: new Date(),
    });

    this.repository.save(shift);
  }

  async findAllByUser(user_id: string): Promise<Shift[]> {
    const shifts = await this.repository.find({
      where: {
        user_id: Equal(user_id),
      },
      order: {
        created_at: 'DESC',
      },
    });

    return shifts;
  }

  async findActiveByUser(user_id: string): Promise<Shift | null> {
    const shift = await this.repository.findOneBy({
      user_id: Equal(user_id),
      isFinished: false,
    });

    return shift;
  }
}

export { ShiftsRepository };
