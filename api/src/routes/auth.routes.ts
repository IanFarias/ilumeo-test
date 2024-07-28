import { AuthenticateUserController } from '@modules/auth/AuthenticateUserController';
import { Router } from 'express';

const authenticateUserController = new AuthenticateUserController();
const authRoutes = Router();

authRoutes.post('/', authenticateUserController.handleRequest);

export default authRoutes;
