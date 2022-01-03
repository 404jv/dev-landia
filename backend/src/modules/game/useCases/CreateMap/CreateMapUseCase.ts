import { inject, injectable } from 'tsyringe';

import { Map } from '@modules/game/infra/typeorm/entities/Map';
import { IMapsRepository } from '@modules/game/repositories/IMapsRepository';

interface IRequest {
  title: string;
  description: string;
  order: number;
}

@injectable()
class CreateMapUseCase {
  constructor(
    @inject('MapsRepository')
    private mapsRepository: IMapsRepository
  ) {}

  async execute({ description, title, order }: IRequest): Promise<Map> {
    const map = await this.mapsRepository.create({
      description,
      title,
      order,
    });

    return map;
  }
}

export { CreateMapUseCase };
