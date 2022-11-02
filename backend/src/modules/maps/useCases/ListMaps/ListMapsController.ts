import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListMapsUseCase } from './ListMapsUseCase';

class ListMapsController {
  async handle(request: Request, response: Response) {
    const listMapsUseCase = container.resolve(ListMapsUseCase);

    const maps = await listMapsUseCase.execute();

    return response.json(maps);
  }
}

export { ListMapsController };
