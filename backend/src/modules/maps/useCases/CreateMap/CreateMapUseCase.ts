import { inject, injectable } from 'tsyringe';

import { Map } from '@modules/maps/infra/typeorm/entities/Map';
import { IMapsRepository } from '@modules/maps/repositories/IMapsRepository';

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
