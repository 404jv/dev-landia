import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CorrectPhaseUseCase } from './CorrectPhaseUseCase';

class CorrectPhaseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;
    const { id: phase_id } = request.params;
    const { map_id } = request.body;

    const correctPhaseUseCase = container.resolve(CorrectPhaseUseCase);

    const result = await correctPhaseUseCase.execute({
      user_id,
      map_id,
      phase_id,
    });

    return response.status(200).json(result);
  }
}

export { CorrectPhaseController };
