import { inject, injectable } from 'tsyringe';

import { Map } from '@modules/maps/infra/typeorm/entities/Map';
import { IMapsRepository } from '@modules/maps/repositories/IMapsRepository';

interface IRequest {
  title: string;
  description: string;
}

@injectable()
class CreateMapUseCase {
  constructor(
    @inject('MapsRepository')
    private mapsRepository: IMapsRepository
  ) {}

  async execute({ description, title }: IRequest): Promise<Map> {
    const map = await this.mapsRepository.create({
      description,
      title,
    });

    return map;
  }
}

export { CreateMapUseCase };
