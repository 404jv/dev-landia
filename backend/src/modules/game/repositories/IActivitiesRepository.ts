import { ICreateActivityDTO } from '../dtos/ICreateActivityDTO';
import { Activity } from '../infra/typeorm/entities/Activity';

interface IActivitiesRepository {
  create(data: ICreateActivityDTO): Promise<Activity>;
  findById(id: string): Promise<Activity>;
  findByIds(ids: string[]): Promise<Activity[]>;
}

export { IActivitiesRepository };
