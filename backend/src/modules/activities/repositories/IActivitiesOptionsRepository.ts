import { ICreateOptionActivityDTO } from '../dtos/ICreateOptionActivityDTO';
import { Option } from '../infra/typeorm/entities/Option';

interface IActivitiesOptionsRepository {
  create(data: ICreateOptionActivityDTO): Promise<void>;
  findOptionsByActivityId(activity_id: string): Promise<Option[]>;
  deleteAllByActivityId(activity_id: string): Promise<void>;
}

export { IActivitiesOptionsRepository };
