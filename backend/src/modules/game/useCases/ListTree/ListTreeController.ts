import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListTreeUseCase } from './ListTreeUseCase';

class ListTreeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listTreeUseCase = container.resolve(ListTreeUseCase);

    const tree = await listTreeUseCase.execute(id);

    return response.status(200).json(tree);
  }
}

export { ListTreeController };
