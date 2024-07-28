import { Router } from 'express';
import shiftRoutes from './shiftRoutes.routes';
import authRoutes from './auth.routes';

const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/shifts', shiftRoutes);

export { routes };
