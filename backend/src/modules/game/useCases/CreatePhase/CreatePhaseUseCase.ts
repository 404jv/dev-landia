import { inject, injectable } from 'tsyringe';

import { ICreatePhaseDTO } from '@modules/game/dtos/ICreatePhaseDTO';
import { IPhasesRepository } from '@modules/game/repositories/IPhasesRepository';

import { InvalidMaxLevelError } from './errors/InvalidMaxLevelError';

enum enType {
  THEORY = 'theory',
  PRACTICE = 'practice',
}

@injectable()
class CreatePhaseUseCase {
  constructor(
    @inject('PhasesRepository')
    private phasesRepository: IPhasesRepository
  ) {}

  async execute({
    map_id,
    max_level,
    title,
    type,
    markdown_text,
  }: ICreatePhaseDTO): Promise<ICreatePhaseDTO> {
    if (type === enType.PRACTICE && max_level < 3) {
      throw new InvalidMaxLevelError();
    }

    if (type === enType.THEORY && max_level !== 1) {
      throw new InvalidMaxLevelError();
    }

    const phase = await this.phasesRepository.create({
      map_id,
      max_level,
      title,
      type,
      markdown_text,
    });

    return phase;
  }
}

export { CreatePhaseUseCase };
