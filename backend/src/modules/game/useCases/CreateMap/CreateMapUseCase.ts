import { inject, injectable } from 'tsyringe';

import { Map } from '@modules/game/infra/typeorm/entities/Map';
import { IMapsRepository } from '@modules/game/repositories/IMapsRepository';

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
