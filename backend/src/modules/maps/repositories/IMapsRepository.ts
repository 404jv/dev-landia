import { ICreateMapDTO } from '../dtos/ICreateMapDTO';
import { Map } from '../infra/typeorm/entities/Map';

interface IMapsRepository {
  create({ description, title, order }: ICreateMapDTO): Promise<Map>;
  findById(id: string): Promise<Map>;
  list(): Promise<Map[]>;
  findByOrder(order: number): Promise<Map>;
  findWithUserLevel(id: string): Promise<Map>;
}

export { IMapsRepository };
