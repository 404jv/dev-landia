import { inject, injectable } from 'tsyringe';

import { IUsersPhasesRepository } from '@modules/game/repositories/IUsersPhasesRepository';
import { Phase } from '@modules/phases/infra/typeorm/entities/Phase';
import { IPhasesRepository } from '@modules/phases/repositories/IPhasesRepository';

@injectable()
class GetTheoryPhaseUseCase {
  constructor(
    @inject('PhasesRepository')
    private phasesRepository: IPhasesRepository,
    @inject('UsersPhasesRepository')
    private usersPhasesRepository: IUsersPhasesRepository
  ) {}

  async execute(phase_id: string, user_id: string): Promise<Phase> {
    const phase = await this.phasesRepository.findById(phase_id);

    const { current_level } =
      await this.usersPhasesRepository.findByUserAndPhase(user_id, phase_id);

    Object.assign(phase, {
      current_level,
    });

    return phase;
  }
}

export { GetTheoryPhaseUseCase };
