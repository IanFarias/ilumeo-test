import { ClockInController } from '@modules/shift/useCases/clockIn/ClockInController';
import { Router } from 'express';

const clockInController = new ClockInController();

const shiftRoutes = Router();

shiftRoutes.get('/clockIn', clockInController.handleRequest);

export default shiftRoutes;
