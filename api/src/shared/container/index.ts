import { ShiftsRepository } from 'repositories/implementations/ShiftsRepository';
import { UsersRepository } from 'repositories/implementations/UsersRepository';
import IShiftsRepository from 'repositories/IShiftsRepository';
import IUsersRepository from 'repositories/IUsersRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IShiftsRepository>(
  'ShiftsRepository',
  ShiftsRepository,
);
