import { IAddActivitiesToPhaseDTO } from '../dtos/IAddActivitiesToPhaseDTO';
import { PhaseActivity } from '../infra/typeorm/entities/PhaseActivity';

interface IPhaseActivitiesRepository {
  create(data: IAddActivitiesToPhaseDTO): Promise<PhaseActivity[]>;
}

export { IPhaseActivitiesRepository };
