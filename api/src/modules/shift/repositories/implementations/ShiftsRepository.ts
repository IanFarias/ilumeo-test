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
    });

    this.repository.save(shift);
  }

  async findAllByUser(userId: string): Promise<Shift[]> {
    const shifts = await this.repository.findBy({ user_id: Equal(userId) });

    return shifts;
  }
}

export { ShiftsRepository };
