import { ICreateOptionActivityDTO } from '../dtos/ICreateOptionActivityDTO';

interface IActivitiesOptionsRepository {
  create(data: ICreateOptionActivityDTO): Promise<void>;
}

export { IActivitiesOptionsRepository };
