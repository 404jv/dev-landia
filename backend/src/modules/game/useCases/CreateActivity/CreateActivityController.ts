import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateActivityUseCase } from './CreateActivityUseCase';

class CreateActivityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, title, type, is_needed_code, options, order } =
      request.body;

    const createActivityUseCase = container.resolve(CreateActivityUseCase);

    const activity = await createActivityUseCase.execute({
      description,
      title,
      type,
      is_needed_code,
      options,
      order,
    });

    return response.status(201).json(activity);
  }
}

export { CreateActivityController };
