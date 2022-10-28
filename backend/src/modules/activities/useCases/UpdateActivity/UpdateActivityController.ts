import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateActivityUseCase } from './UpdateActivityUseCase';

class UpdateActivityController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { title, description, order, tips, is_needed_code, phase_id, type } =
      request.body;

    const updatedActivityUseCase = container.resolve(UpdateActivityUseCase);

    const updatedActivity = await updatedActivityUseCase.execute({
      id,
      title,
      description,
      order,
      tips,
      is_needed_code,
      phase_id,
      type,
    });

    return response.json(updatedActivity);
  }
}

export { UpdateActivityController };
