import { getRepository, Repository } from 'typeorm';

import { ICreateMapDTO } from '@modules/maps/dtos/ICreateMapDTO';
import { IMapsRepository } from '@modules/maps/repositories/IMapsRepository';

import { Map } from '../entities/Map';

class MapsRepository implements IMapsRepository {
  private repository: Repository<Map>;

  constructor() {
    this.repository = getRepository(Map);
  }

  async create({ description, title }: ICreateMapDTO): Promise<Map> {
    const map = this.repository.create({
      description,
      title,
    });

    await this.repository.save(map);

    return map;
  }
}

export { MapsRepository };
