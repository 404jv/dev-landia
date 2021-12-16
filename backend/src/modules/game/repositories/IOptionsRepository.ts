import { ICreateOptionDTO } from '../dtos/ICreateOptionDTO';
import { Option } from '../infra/typeorm/entities/Option';

interface IOptionsRepository {
  create(data: ICreateOptionDTO): Promise<Option>;
}

export { IOptionsRepository };
