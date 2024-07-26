import { Router } from 'express';
import timeClockRoutes from './timeClock.routes';

const routes = Router();

routes.use('/timeClock', timeClockRoutes);

export { routes };
