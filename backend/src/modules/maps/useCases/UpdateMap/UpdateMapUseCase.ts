import { inject, injectable } from 'tsyringe';

import { IUpdateMapDTO } from '@modules/maps/dtos/IUpdateMapDTO';
import { IMapsRepository } from '@modules/maps/repositories/IMapsRepository';

import { MapDoesNotExistsError } from './errors/MapDoesNotExistsError';

@injectable()
class UpdateMapUseCase {
  constructor(
    @inject('MapsRepository')
    private mapsRepository: IMapsRepository
  ) {}

  async execute({ id, title, description, order }: IUpdateMapDTO) {
    const map = await this.mapsRepository.findById(id);

    if (!map) {
      throw new MapDoesNotExistsError();
    }

    const updatedMap = await this.mapsRepository.update({
      id,
      title,
      description,
      order,
    });

    return updatedMap;
  }
}

export { UpdateMapUseCase };
