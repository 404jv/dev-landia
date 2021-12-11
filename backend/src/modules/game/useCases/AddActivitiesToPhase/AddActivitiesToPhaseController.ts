import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AddActivitiesToPhaseUseCase } from './AddActivitiesToPhaseUseCase';

class AddActivitiesToPhaseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const addActivitiesToPhaseUseCase = container.resolve(
      AddActivitiesToPhaseUseCase
    );

    await addActivitiesToPhaseUseCase.execute({
      activities_ids: ['123'],
      phase_id: '23',
    });

    return response.sendStatus(201);
  }
}

export { AddActivitiesToPhaseController };
