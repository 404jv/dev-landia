import { IAddActivitiesToPhaseDTO } from '@modules/game/dtos/IAddActivitiesToPhaseDTO';
import { PhaseActivity } from '@modules/game/infra/typeorm/entities/PhaseActivity';

import { IPhaseActivitiesRepository } from '../IPhaseActivitiesRepository';

class InMemoryPhaseActivitiesRepository implements IPhaseActivitiesRepository {
  private repository: PhaseActivity[] = [];

  async create({
    activities_ids,
    phase_id,
  }: IAddActivitiesToPhaseDTO): Promise<PhaseActivity[]> {
    const phaseActivities = activities_ids.map((activity_id) => {
      const phaseActivities = new PhaseActivity();

      Object.assign(phaseActivities, {
        phase_id,
        activity_id,
      });

      this.repository.push(phaseActivities);
      return phaseActivities;
    });

    return phaseActivities;
  }
}

export { InMemoryPhaseActivitiesRepository };
