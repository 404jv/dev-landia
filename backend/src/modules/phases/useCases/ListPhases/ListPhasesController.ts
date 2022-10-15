import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListPhasesUseCase } from './ListPhasesUseCase';

class ListPhasesController {
  async handle(request: Request, response: Response) {
    const listPhasesUseCase = container.resolve(ListPhasesUseCase);

    const phases = await listPhasesUseCase.execute();

    return response.json(phases);
  }
}

export { ListPhasesController };
