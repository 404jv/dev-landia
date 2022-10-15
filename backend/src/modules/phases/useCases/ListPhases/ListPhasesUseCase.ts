import { inject, injectable } from 'tsyringe';

import { IPhasesRepository } from '@modules/phases/repositories/IPhasesRepository';

@injectable()
class ListPhasesUseCase {
  constructor(
    @inject('PhasesRepository')
    private phasesRepository: IPhasesRepository
  ) {}

  async execute() {
    const phases = await this.phasesRepository.list();

    return phases;
  }
}

export { ListPhasesUseCase };
