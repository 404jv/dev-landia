import { ICreateOptionActivityDTO } from '../dtos/ICreateOptionActivityDTO';

interface IActivitiesAnswersRepository {
  create(data: ICreateOptionActivityDTO): Promise<void>;
}

export { IActivitiesAnswersRepository };
