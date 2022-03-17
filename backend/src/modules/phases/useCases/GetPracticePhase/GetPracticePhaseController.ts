import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetPracticePhaseUseCase } from './GetPracticePhaseUseCase';

class GetPracticePhaseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: phase_id } = request.params;
    const { id: user_id } = request.user;

    const getPhaseUseCase = container.resolve(GetPracticePhaseUseCase);

    const activities = await getPhaseUseCase.execute(phase_id, user_id);

    return response.status(200).json(activities);
  }
}

export { GetPracticePhaseController };
