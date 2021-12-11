import { PhaseActivity } from '../infra/typeorm/entities/PhaseActivity';

interface IPhaseActivitiesRepository {
  create(phase_id: string, activity_id: string): Promise<PhaseActivity>;
}

export { IPhaseActivitiesRepository };
