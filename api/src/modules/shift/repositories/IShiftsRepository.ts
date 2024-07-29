import { User } from '@modules/user/entities/User';
import { Shift } from '../entities/Shift';

export default interface IShiftsRepository {
  create(user: User): Promise<void>;
  update(shift: Shift): Promise<void>;
  findById(id: string): Promise<Shift | null>;
  findAllByUser(user_id: string): Promise<Shift[]>;
  findActiveByUser(user_id: string): Promise<Shift | null>;
  hasActiveShift(user_id: string): Promise<boolean>;
}
