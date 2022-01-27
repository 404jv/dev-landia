import { inject, injectable } from 'tsyringe';

import { ICreatePhaseDTO } from '@modules/game/dtos/ICreatePhaseDTO';
import { IPhasesRepository } from '@modules/game/repositories/IPhasesRepository';
import { IMapsRepository } from '@modules/maps/repositories/IMapsRepository';

import { InvalidMaxLevelError } from './errors/InvalidMaxLevelError';
import { MapNotFoundError } from './errors/MapNotFoundError';

enum enType {
  THEORY = 'theory',
  PRACTICE = 'practice',
}

@injectable()
class CreatePhaseUseCase {
  constructor(
    @inject('PhasesRepository')
    private phasesRepository: IPhasesRepository,
    @inject('MapsRepository')
    private mapsRepository: IMapsRepository
  ) {}

  async execute({
    map_id,
    max_level,
    title,
    type,
    markdown_text,
    order,
  }: ICreatePhaseDTO): Promise<ICreatePhaseDTO> {
    if (type === enType.PRACTICE && max_level < 3) {
      throw new InvalidMaxLevelError();
    }

    if (type === enType.THEORY && max_level !== 1) {
      throw new InvalidMaxLevelError();
    }

    const mapExists = await this.mapsRepository.findById(map_id);

    if (!mapExists) {
      throw new MapNotFoundError();
    }

    const phase = await this.phasesRepository.create({
      map_id,
      max_level,
      title,
      type,
      markdown_text,
      order,
    });

    return phase;
  }
}

export { CreatePhaseUseCase };
