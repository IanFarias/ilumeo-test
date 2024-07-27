import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateUserService } from '@modules/user/useCases/authenticateUser/AuthenticateUserService';

class AuthenticateUserController {
  async handleRequest(
    resquest: Request,
    response: Response,
  ): Promise<Response> {
    const { email, password } = resquest.body;
    const authenticateUserService = container.resolve(AuthenticateUserService);
    const token = await authenticateUserService.execute({ email, password });

    return response.status(200).json(token);
  }
}

export { AuthenticateUserController };
