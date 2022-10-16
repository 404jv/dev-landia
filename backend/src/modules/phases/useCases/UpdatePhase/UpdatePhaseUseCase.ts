import { inject, injectable } from 'tsyringe';

import { ICreatePhaseDTO } from '@modules/phases/dtos/ICreatePhaseDTO';
import { IPhasesRepository } from '@modules/phases/repositories/IPhasesRepository';

import { PhaseDoesNotExistsError } from './errors/PhaseDoesNotExistsError';

@injectable()
class UpdatePhaseUseCase {
  constructor(
    @inject('PhaseRepository')
    private phasesRepository: IPhasesRepository
  ) {}

  async execute({
    id,
    title,
    description,
    map_id,
    max_level,
    order,
    type,
    hexadecimal_color,
    markdown_text,
  }: ICreatePhaseDTO) {
    const phase = await this.phasesRepository.findById(id);

    if (!phase) {
      throw new PhaseDoesNotExistsError();
    }

    const updatedPhase = await this.phasesRepository.update({
      id,
      title,
      description,
      map_id,
      max_level,
      order,
      type,
      hexadecimal_color,
      markdown_text,
    });

    return updatedPhase;
  }
}

export { UpdatePhaseUseCase };
