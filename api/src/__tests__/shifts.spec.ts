import 'reflect-metadata';
import { ShiftService } from '@modules/shift/ShiftService';
import IShiftsRepository from '@repositories/IShiftsRepository';
import { UserService } from '@modules/user/UserService';
import IUsersRepository from '@repositories/IUsersRepository';
import { ListShiftsDTO } from '@modules/shift/dtos/ListShiftsDTO';

describe('Shift Service', () => {
  let shiftService: ShiftService;
  let shiftsRepositoryMock: jest.Mocked<IShiftsRepository>;

  let userService: UserService;
  let usersRepositoryMock: jest.Mocked<IUsersRepository>;

  beforeEach(() => {
    shiftsRepositoryMock = {
      create: jest.fn(),
      update: jest.fn(),
      findById: jest.fn(),
      findAllByUser: jest.fn(),
      findActiveByUser: jest.fn(),
      hasActiveShift: jest.fn(),
    };

    shiftService = new ShiftService(shiftsRepositoryMock);

    usersRepositoryMock = {
      findById: jest.fn(),
      findByEmail: jest.fn(),
    };

    userService = new UserService(usersRepositoryMock);
  });

  it('Should get user history of shifts', async () => {
    const user = {
      id: 'b38e28a7-31c8-4dc5-b556-498b35ada9b0',
      name: 'Ian Paixão',
      email: 'ian@ilumeo.com',
      password: '1234',
      created_at: new Date(),
      updated_at: new Date(),
    };

    const expectedShift = {
      id: 'c55a511e-002d-45a6-8d65-e122f3e5ebd1',
      clockIn: new Date('2024-07-29T8:00:00'),
      clockOut: new Date('2024-07-29T18:00:00'),
      user_id: user,
      isFinished: true,
      created_at: new Date('2024-07-29T8:00:00'),
      updated_at: new Date('2024-07-29T18:00:00'),
    };

    shiftsRepositoryMock.findAllByUser.mockResolvedValue([expectedShift]);

    const response: ListShiftsDTO[] = await shiftService.getUserHistory(
      user.id,
    );

    expect(response).not.toHaveLength(0);
  });
});
