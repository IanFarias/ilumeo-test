import authConfig from '@config/auth';
import { UsersRepository } from '@modules/user/repositories/implementations/UsersRepository';
import AppError from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export async function ensureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authorizationHeader = request.headers.authorization;

  if (!authorizationHeader) {
    throw new AppError('Authorization token missing', 401);
  }

  const [, token] = authorizationHeader.split(' ');

  try {
    const { secretToken } = authConfig.jwt;
    const { sub: user_id } = verify(token, secretToken) as IPayload;

    const userRepository = new UsersRepository();

    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists!', 401);
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch (error) {
    throw new AppError('Invalid token!', 401);
  }
}
