import { getRepository, Repository } from 'typeorm';

import { IPhaseActivitiesRepository } from '@modules/game/repositories/IPhaseActivitiesRepository';

import { PhaseActivity } from '../entities/PhaseActivity';

class PhaseActivitiesRepository implements IPhaseActivitiesRepository {
  private repository: Repository<PhaseActivity>;

  constructor() {
    this.repository = getRepository(PhaseActivity);
  }

  async create(phase_id: string, activity_id: string): Promise<PhaseActivity> {
    const phaseActivity = this.repository.create({
      activity_id,
      phase_id,
    });

    await this.repository.save(phaseActivity);

    return phaseActivity;
  }
}

export { PhaseActivitiesRepository };
