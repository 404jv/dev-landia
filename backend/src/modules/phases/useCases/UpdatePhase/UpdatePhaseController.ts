import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdatePhaseUseCase } from './UpdatePhaseUseCase';

class UpdatePhaseController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const {
      title,
      description,
      map_id,
      max_level,
      order,
      type,
      hexadecimal_color,
      markdown_text,
    } = request.body;

    const updatePhaseUseCase = container.resolve(UpdatePhaseUseCase);

    const updatedPhase = await updatePhaseUseCase.execute({
      id,
      title,
      description,
      map_id,
      max_level,
      order,
      type,
      hexadecimal_color,
      markdown_text,
    });

    return response.json(updatedPhase);
  }
}

export { UpdatePhaseController };
