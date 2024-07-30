import 'reflect-metadata';
import { User } from '@modules/user/entities/User';
import IUsersRepository from 'repositories/IUsersRepository';
import { UserService } from '@modules/user/UserService';
import AppError from '@shared/errors/AppError';

describe('UserService', () => {
  let userService: UserService;
  let usersRepositoryMock: jest.Mocked<IUsersRepository>;

  beforeEach(() => {
    usersRepositoryMock = {
      findById: jest.fn(),
      findByEmail: jest.fn(),
    };

    userService = new UserService(usersRepositoryMock);
  });

  it('get user by id', async () => {
    const user_id = 'b38e28a7-31c8-4dc5-b556-498b35ada9b0';
    const expectedUser: User = {
      id: '1',
      name: 'Ian Paixão',
      email: 'ian@ilumeo.com',
      password: '1234',
      created_at: new Date(),
      updated_at: new Date(),
    };

    usersRepositoryMock.findById.mockResolvedValue(expectedUser);

    const user = await userService.findById(user_id);

    expect(user).toEqual(expectedUser);
  });

  it('get user by email', async () => {
    const user_email = 'ian@ilumeo.com';
    const expectedUser: User = {
      id: 'b38e28a7-31c8-4dc5-b556-498b35ada9b0',
      name: 'Ian Paixão',
      email: 'ian@ilumeo.com',
      password: '1234',
      created_at: new Date(),
      updated_at: new Date(),
    };

    usersRepositoryMock.findByEmail.mockResolvedValue(expectedUser);

    const user = await userService.findByEmail(user_email);

    expect(user).toEqual(expectedUser);
  });

  it('get user by email', async () => {
    const user_email = 'ian@ilumeo.com';
    const expectedUser = null;

    usersRepositoryMock.findByEmail.mockResolvedValue(expectedUser);

    await expect(userService.findByEmail(user_email)).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
