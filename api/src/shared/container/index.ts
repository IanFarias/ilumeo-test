import { ShiftsRepository } from '@modules/shift/repositories/implementations/ShiftsRepository';
import IShiftsRepository from '@modules/shift/repositories/IShiftsRepository';
import { ShiftService } from '@modules/shift/ShiftService';
import { UsersRepository } from '@modules/user/repositories/implementations/UsersRepository';
import IUsersRepository from '@modules/user/repositories/IUsersRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IShiftsRepository>(
  'ShiftsRepository',
  ShiftsRepository,
);

container.registerSingleton('ShiftService', ShiftService);
