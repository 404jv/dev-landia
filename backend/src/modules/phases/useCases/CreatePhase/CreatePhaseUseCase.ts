import { inject, injectable } from 'tsyringe';

import { IMapsRepository } from '@modules/maps/repositories/IMapsRepository';
import { ICreatePhaseDTO } from '@modules/phases/dtos/ICreatePhaseDTO';
import { IPhasesRepository } from '@modules/phases/repositories/IPhasesRepository';

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
    description,
    markdown_text,
    order,
    hexadecimal_color,
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
      description,
      markdown_text,
      order,
      hexadecimal_color,
    });

    return phase;
  }
}

export { CreatePhaseUseCase };
