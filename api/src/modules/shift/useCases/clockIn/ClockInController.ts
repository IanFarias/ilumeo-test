import { Request, Response } from 'express';

class ClockInController {
  async handleRequest(
    resquest: Request,
    response: Response,
  ): Promise<Response> {
    return response.send('Clock In');
  }
}

export { ClockInController };
