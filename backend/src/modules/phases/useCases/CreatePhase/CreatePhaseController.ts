import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePhaseUseCase } from './CreatePhaseUseCase';

class CreatePhaseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      title,
      map_id,
      max_level,
      type,
      markdown_text,
      order,
      description,
      hexadecimal_color,
    } = request.body;

    const createMapUseCase = container.resolve(CreatePhaseUseCase);

    const phase = await createMapUseCase.execute({
      title,
      map_id,
      max_level,
      type,
      markdown_text,
      order,
      description,
      hexadecimal_color,
    });

    return response.status(201).json(phase);
  }
}

export { CreatePhaseController };
