import { getRepository, Repository } from 'typeorm';

import { ICreateMapDTO } from '@modules/game/dtos/ICreateMapDTO';
import { IMapsRepository } from '@modules/game/repositories/IMapsRepository';

import { Map } from '../entities/Map';

class MapsRepository implements IMapsRepository {
  private repository: Repository<Map>;

  constructor() {
    this.repository = getRepository(Map);
  }

  async findById(id: string): Promise<Map> {
    const map = await this.repository.findOne(id);
    return map;
  }

  async create({ description, title }: ICreateMapDTO): Promise<Map> {
    const map = this.repository.create({
      description,
      title,
    });

    await this.repository.save(map);

    return map;
  }

  async list(user_id: string): Promise<Map[]> {
    const maps = await this.repository.find({
      relations: ['phases'],
    });

    return maps;
  }
}

export { MapsRepository };
