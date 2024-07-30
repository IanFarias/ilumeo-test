import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ShiftService } from './ShiftService';

class ShiftController {
  async clockIn(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const shiftService = container.resolve(ShiftService);

    await await shiftService.clockIn(id);

    return response.status(201).send();
  }

  async clockOut(request: Request, response: Response): Promise<Response> {
    const { shift_id } = request.body;
    const shiftService = container.resolve(ShiftService);

    await await shiftService.clockOut(shift_id);

    return response.status(200).send();
  }

  async getUserHistory(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.user;

    const shiftService = container.resolve(ShiftService);

    const shifts = await shiftService.getUserHistory(id);

    return response.status(200).json(shifts);
  }

  async getActiveShift(request: Request, response: Response) {
    const { id } = request.user;
    const shiftService = container.resolve(ShiftService);

    const shift = await shiftService.getActiveShift(id);

    return response.status(200).json(shift);
  }
}

export { ShiftController };
