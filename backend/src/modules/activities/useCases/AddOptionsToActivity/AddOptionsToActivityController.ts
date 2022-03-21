import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AddOptionsToActivityUseCase } from './AddOptionsToActivityUseCase';

class AddOptionsToActivityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      activityAnswerOptionsIds,
      activityDefaultCodeOptionsIds,
      activity_id,
    } = request.body;

    const addOptionsToActivityUseCase = container.resolve(
      AddOptionsToActivityUseCase
    );

    await addOptionsToActivityUseCase.execute({
      activityAnswerOptionsIds,
      activityDefaultCodeOptionsIds,
      activity_id,
    });

    return response.sendStatus(204);
  }
}

export { AddOptionsToActivityController };
