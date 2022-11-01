import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListActivitiesUseCase } from './ListActivitiesUseCase';

class ListActivitiesController {
  async handle(request: Request, response: Response) {
    const listActivitiesUseCase = container.resolve(ListActivitiesUseCase);

    const activities = await listActivitiesUseCase.execute();

    return response.json(activities);
  }
}

export { ListActivitiesController };
