import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ShiftService } from './ShiftService';

class ShiftController {
  async clockIn(request: Request, response: Response): Promise<Response> {
    const shiftService = container.resolve(ShiftService);

    const { id } = request.user;

    await shiftService.clockIn(id);

    return response.status(201).send();
  }

  async clockOut(request: Request, response: Response): Promise<Response> {
    const shiftService = container.resolve(ShiftService);
    const { id } = request.params;

    await shiftService.clockOut(id);

    return response.status(200).send();
  }

  async getUserHistory(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const shiftService = container.resolve(ShiftService);

    const { id } = request.user;
    const shifts = await shiftService.getUserHistory(id);

    return response.status(200).json(shifts);
  }
}

export { ShiftController };
