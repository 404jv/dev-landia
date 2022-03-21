import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetTheoryPhaseUseCase } from './GetTheoryPhaseUseCase';

class GetTheoryPhaseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: phase_id } = request.params;
    const { id: user_id } = request.user;

    const getPracticeUseCase = container.resolve(GetTheoryPhaseUseCase);

    const phase = await getPracticeUseCase.execute(phase_id, user_id);

    return response.status(200).json(phase);
  }
}

export { GetTheoryPhaseController };
