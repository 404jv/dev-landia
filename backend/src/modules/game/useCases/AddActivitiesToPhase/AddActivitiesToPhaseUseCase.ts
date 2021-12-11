import { IAddActivitiesToPhaseDTO } from '@modules/game/dtos/IAddActivitiesToPhaseDTO';
import { IPhaseActivitiesRepository } from '@modules/game/repositories/IPhaseActivitiesRepository';

class AddActivitiesToPhaseUseCase {
  constructor(private phaseActivitiesRepository: IPhaseActivitiesRepository) {}

  async execute({
    activities_ids,
    phase_id,
  }: IAddActivitiesToPhaseDTO): Promise<void> {
    activities_ids.map(async (activity_id) => {
      await this.phaseActivitiesRepository.create(phase_id, activity_id);
    });
  }
}

export { AddActivitiesToPhaseUseCase };
