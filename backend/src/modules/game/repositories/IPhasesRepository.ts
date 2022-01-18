import { ICreatePhaseDTO } from '../dtos/ICreatePhaseDTO';
import { Phase } from '../infra/typeorm/entities/Phase';

interface IPhasesRepository {
  create(data: ICreatePhaseDTO): Promise<Phase>;
  list(): Promise<Phase[]>;
  findById(id: string): Promise<Phase>;
  update(data: ICreatePhaseDTO): Promise<Phase>;
  findAndSelectActivities(
    id: string,
    start: number,
    end: number
  ): Promise<Phase>;
}

export { IPhasesRepository };
