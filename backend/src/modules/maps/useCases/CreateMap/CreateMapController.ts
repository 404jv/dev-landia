import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { CreateMapUseCase } from './CreateMapUseCase';

class CreateMapController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, order } = request.body;

    const createMapUseCase = container.resolve(CreateMapUseCase);

    await createMapUseCase.execute({
      description,
      title,
      order,
    });

    return response.sendStatus(201);
  }
}

export { CreateMapController };
