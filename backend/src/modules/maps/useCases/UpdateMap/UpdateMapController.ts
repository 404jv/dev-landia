import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateMapUseCase } from './UpdateMapUseCase';

class UpdateMapController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { title, description, order } = request.body;

    const updateMapUseCase = container.resolve(UpdateMapUseCase);

    const updatedMap = await updateMapUseCase.execute({
      id,
      title,
      description,
      order,
    });

    return response.json(updatedMap);
  }
}

export { UpdateMapController };
