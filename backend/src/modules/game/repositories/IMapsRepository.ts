import { ICreateMapDTO } from '../dtos/ICreateMapDTO';
import { Map } from '../infra/typeorm/entities/Map';

interface IMapsRepository {
  create({ description, title }: ICreateMapDTO): Promise<Map>;
  findById(id: string): Promise<Map>;
  list(): Promise<Map[]>;
}

export { IMapsRepository };
