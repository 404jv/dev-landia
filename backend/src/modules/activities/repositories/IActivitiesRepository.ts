import { ICreateActivityDTO } from '../dtos/ICreateActivityDTO';
import { IUpdateActivityDTO } from '../dtos/IUpdateActivityDTO';
import { Activity } from '../infra/typeorm/entities/Activity';

interface IActivitiesRepository {
  create(data: ICreateActivityDTO): Promise<Activity>;
  list(): Promise<Activity[]>;
  findById(id: string): Promise<Activity>;
  findByIds(ids: string[]): Promise<Activity[]>;
  update(data: IUpdateActivityDTO): Promise<Activity>;
}

export { IActivitiesRepository };
