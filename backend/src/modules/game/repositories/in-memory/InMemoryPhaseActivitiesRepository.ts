import { IAddActivitiesToPhaseDTO } from '@modules/game/dtos/IAddActivitiesToPhaseDTO';
import { PhaseActivity } from '@modules/game/infra/typeorm/entities/PhaseActivity';

import { IPhaseActivitiesRepository } from '../IPhaseActivitiesRepository';

class InMemoryPhaseActivitiesRepository implements IPhaseActivitiesRepository {
  private repository: PhaseActivity[] = [];

  async create(phase_id: string, activity_id: string): Promise<PhaseActivity> {
    const phaseActivity = new PhaseActivity();

    Object.assign(phaseActivity, {
      phase_id,
      activity_id,
    });
    this.repository.push(phaseActivity);

    return phaseActivity;
  }
}

export { InMemoryPhaseActivitiesRepository };
