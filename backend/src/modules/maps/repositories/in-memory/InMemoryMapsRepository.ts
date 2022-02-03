import { ICreateMapDTO } from '@modules/maps/dtos/ICreateMapDTO';
import { Map } from '@modules/maps/infra/typeorm/entities/Map';

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

  async findByOrder(order: number): Promise<Map> {
    return this.repository.find((map) => map.order === order);
  }
}

export { InMemoryMapsRepository };
