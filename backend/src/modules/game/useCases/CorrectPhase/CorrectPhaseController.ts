import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CorrectPhaseUseCase } from './CorrectPhaseUseCase';

class CorrectPhaseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const correctPhaseUseCase = container.resolve(CorrectPhaseUseCase);

    await correctPhaseUseCase.execute();

    return response.status(200).json();
  }
}

export { CorrectPhaseController };
