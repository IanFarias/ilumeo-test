import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IUsersRepository from 'repositories/IUsersRepository';

@injectable()
class UserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async findById(user_id: string) {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User Not Found', 404);
    }

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User Not Found', 404);
    }

    return user;
  }
}

export { UserService };
