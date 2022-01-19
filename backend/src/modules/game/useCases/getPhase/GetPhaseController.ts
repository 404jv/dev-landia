import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetPhaseUseCase } from './GetPhaseUseCase';

class GetPhaseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { phaseLevel, phase_id } = request.body;

    const getPhaseUseCase = container.resolve(GetPhaseUseCase);

    const activities = await getPhaseUseCase.execute(phase_id, phaseLevel);

    return response.status(200).json(activities);
  }
}

export { GetPhaseController };
