import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AddActivitiesToPhaseUseCase } from './AddActivitiesToPhaseUseCase';

class AddActivitiesToPhaseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { activities_ids, phase_id } = request.body;

    const addActivitiesToPhaseUseCase = container.resolve(
      AddActivitiesToPhaseUseCase
    );

    await addActivitiesToPhaseUseCase.execute({
      activities_ids,
      phase_id,
    });

    return response.sendStatus(201);
  }
}

export { AddActivitiesToPhaseController };
