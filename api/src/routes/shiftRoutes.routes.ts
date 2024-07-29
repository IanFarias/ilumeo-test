import { ShiftController } from '@modules/shift/ShiftController';
import { Router } from 'express';
import { ensureAuthentication } from 'middlewares/ensureAuthentication';

const shiftController = new ShiftController();

const shiftRoutes = Router();

shiftRoutes.get('/', ensureAuthentication, shiftController.getUserHistory);
shiftRoutes.get(
  '/active',
  ensureAuthentication,
  shiftController.getActiveShift,
);
shiftRoutes.post('/clockIn', ensureAuthentication, shiftController.clockIn);
shiftRoutes.patch('/clockOut', ensureAuthentication, shiftController.clockOut);

export default shiftRoutes;
