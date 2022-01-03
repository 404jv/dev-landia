import { ICreateMapDTO } from '@modules/game/dtos/ICreateMapDTO';
import { Map } from '@modules/game/infra/typeorm/entities/Map';

import { IMapsRepository } from '../IMapsRepository';

class InMemoryMapsRepository implements IMapsRepository {
  private repository: Map[] = [];

  async create({ description, title, order }: ICreateMapDTO): Promise<Map> {
    const map = new Map();

    Object.assign(map, {
      description,
      title,
      order,
    });
    this.repository.push(map);

    return map;
  }

  async findById(id: string): Promise<Map> {
    return this.repository.find((map) => map.id === id);
  }

  async list(): Promise<Map[]> {
    return this.repository;
  }
}

export { InMemoryMapsRepository };
