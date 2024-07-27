import { Router } from 'express';
import { AuthenticateUserController } from '@modules/user/useCases/authenticateUser/AuthenticateUserController';

const authenticateUserController = new AuthenticateUserController();
const authRoutes = Router();

authRoutes.post('/', authenticateUserController.handleRequest);

export default authRoutes;
