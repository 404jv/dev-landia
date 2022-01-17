import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetPhaseUseCase } from './GetPhaseUseCase';

class GetPhaseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getPhaseUseCase = container.resolve(GetPhaseUseCase);

    await getPhaseUseCase.execute();

    return response.sendStatus(200);
  }
}

export { GetPhaseController };
