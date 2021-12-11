import { IAddActivitiesToPhaseDTO } from '@modules/game/dtos/IAddActivitiesToPhaseDTO';
import { IPhaseActivitiesRepository } from '@modules/game/repositories/IPhaseActivitiesRepository';
import { IPhasesRepository } from '@modules/game/repositories/IPhasesRepository';

import { PhaseNotFoundError } from './errors/PhaseNotFoundError';

class AddActivitiesToPhaseUseCase {
  constructor(
    private phaseActivitiesRepository: IPhaseActivitiesRepository,
    private phasesRepository: IPhasesRepository
  ) {}

  async execute({
    activities_ids,
    phase_id,
  }: IAddActivitiesToPhaseDTO): Promise<void> {
    const phaseExists = await this.phasesRepository.findById(phase_id);

    if (!phaseExists) {
      throw new PhaseNotFoundError();
    }

    activities_ids.map(async (activity_id) => {
      await this.phaseActivitiesRepository.create(phase_id, activity_id);
    });
  }
}

export { AddActivitiesToPhaseUseCase };
