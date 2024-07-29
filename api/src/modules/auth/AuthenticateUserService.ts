import { IAuthenticateUserDTO } from '@modules/auth/dtos/IAuthenticateUserDTO';
import { container, injectable } from 'tsyringe';
import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { UserService } from '@modules/user/UserService';

@injectable()
class AuthenticateUserService {
  private userService: UserService;
  constructor() {
    this.userService = container.resolve(UserService);
  }

  async execute({ email, password }: IAuthenticateUserDTO) {
    const user = await this.userService.findByEmail(email);
    const { secretToken, expiresInToken } = authConfig.jwt;

    if (!user) {
      throw new AppError('User does not exists!', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const token = sign({}, secretToken, {
      subject: user.id,
      expiresIn: expiresInToken,
    });

    const tokenReturn = {
      id: user.id,
      email: user.email,
      token,
    };

    return tokenReturn;
  }
}

export { AuthenticateUserService };
