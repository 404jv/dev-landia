import { ICreateMapDTO } from '../dtos/ICreateMapDTO';
import { IUpdateMapDTO } from '../dtos/IUpdateMapDTO';
import { Map } from '../infra/typeorm/entities/Map';

interface IMapsRepository {
  create({ description, title, order }: ICreateMapDTO): Promise<Map>;
  update({ id, title, description, order }: IUpdateMapDTO): Promise<Map>;
  findById(id: string): Promise<Map>;
  list(): Promise<Map[]>;
  findByOrder(order: number): Promise<Map>;
  findWithUserLevel(id: string): Promise<Map>;
}

export { IMapsRepository };
