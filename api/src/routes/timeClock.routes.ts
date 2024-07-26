import { ClockInController } from '@modules/timeClock/useCases/clockIn/ClockInController';
import { Router } from 'express';

const clockInController = new ClockInController();

const timeClockRoutes = Router();

timeClockRoutes.get('/clockIn', clockInController.handleRequest);

export default timeClockRoutes;
