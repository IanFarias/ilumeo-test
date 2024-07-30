import { ShiftController } from '@modules/shift/ShiftController';
import { ShiftService } from '@modules/shift/ShiftService';
import { Router } from 'express';
import { ensureAuthentication } from 'middlewares/ensureAuthentication';
import { container } from 'tsyringe';

const shiftController = new ShiftController(container.resolve(ShiftService));

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
