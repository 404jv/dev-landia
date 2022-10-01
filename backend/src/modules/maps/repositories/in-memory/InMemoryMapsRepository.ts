import { ICreateMapDTO } from '@modules/maps/dtos/ICreateMapDTO';
import { IUpdateMapDTO } from '@modules/maps/dtos/IUpdateMapDTO';
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

  async update({ id, title, description, order }: IUpdateMapDTO): Promise<Map> {
    const mapToBeUpdate = this.repository.find((map) => map.id === id);

    const newMap = {
      ...mapToBeUpdate,
      title,
      description,
      order,
    };

    const repoUpdated = this.repository.map((map) => {
      if (map.id === id) {
        return newMap;
      }
      return map;
    });

    this.repository = repoUpdated;

    return newMap;
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

  findWithUserLevel(id: string): Promise<Map> {
    throw new Error('Method not implemented.');
  }
}

export { InMemoryMapsRepository };
