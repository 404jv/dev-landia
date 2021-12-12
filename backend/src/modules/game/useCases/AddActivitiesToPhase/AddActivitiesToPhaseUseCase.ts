import { IAddActivitiesToPhaseDTO } from '@modules/game/dtos/IAddActivitiesToPhaseDTO';
import { IActivitiesRepository } from '@modules/game/repositories/IActivitiesRepository';
import { IPhaseActivitiesRepository } from '@modules/game/repositories/IPhaseActivitiesRepository';
import { IPhasesRepository } from '@modules/game/repositories/IPhasesRepository';

import { ActivityNotFoundError } from './errors/ActivityNotFoundError';
import { PhaseNotFoundError } from './errors/PhaseNotFoundError';

class AddActivitiesToPhaseUseCase {
  constructor(
    private phaseActivitiesRepository: IPhaseActivitiesRepository,
    private phasesRepository: IPhasesRepository,
    private activitiesRepository: IActivitiesRepository
  ) {}

  async execute({
    activities_ids,
    phase_id,
  }: IAddActivitiesToPhaseDTO): Promise<void> {
    const phaseExists = await this.phasesRepository.findById(phase_id);

    if (!phaseExists) {
      throw new PhaseNotFoundError();
    }

    const nonExistentActivityId = await this.findNonExistentActivityById(
      activities_ids
    );

    if (nonExistentActivityId) {
      throw new ActivityNotFoundError(nonExistentActivityId);
    }

    activities_ids.map(async (activity_id) => {
      await this.phaseActivitiesRepository.create(phase_id, activity_id);
    });
  }

  private async findNonExistentActivityById(
    activities_ids: string[]
  ): Promise<string> {
    const nonExistentId = activities_ids.find(async (activity_id) => {
      const activityExists = await this.activitiesRepository.findById(
        activity_id
      );

      return activityExists;
    });

    return nonExistentId;
  }
}

export { AddActivitiesToPhaseUseCase };
