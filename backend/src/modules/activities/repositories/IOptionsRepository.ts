import { ICreateOptionDTO } from '../dtos/ICreateOptionDTO';
import { Option } from '../infra/typeorm/entities/Option';

interface IOptionsRepository {
  create(data: ICreateOptionDTO): Promise<Option>;
  findByIds(ids: string[]): Promise<Option[]>;
  findById(id: string): Promise<Option>;
}

export { IOptionsRepository };
