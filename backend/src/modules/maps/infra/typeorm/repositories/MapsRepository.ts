import { getRepository, Repository } from 'typeorm';

import { ICreateMapDTO } from '@modules/maps/dtos/ICreateMapDTO';
import { IMapsRepository } from '@modules/maps/repositories/IMapsRepository';

import { Map } from '../entities/Map';

class MapsRepository implements IMapsRepository {
  private repository: Repository<Map>;

  constructor() {
    this.repository = getRepository(Map);
  }

  async findById(id: string): Promise<Map> {
    const map = await this.repository.findOne({
      where: {
        id,
      },
      relations: ['phases'],
    });
    return map;
  }

  async findWithUserLevel(id: string): Promise<Map> {
    const map = await this.repository.findOne({
      where: {
        id,
      },
      relations: ['phases', 'phases.userPhase', 'userMap'],
    });

    return map;
  }

  async create({ description, title, order }: ICreateMapDTO): Promise<Map> {
    const map = this.repository.create({
      description,
      title,
      order,
    });

    await this.repository.save(map);

    return map;
  }

  async list(): Promise<Map[]> {
    const maps = await this.repository
      .createQueryBuilder('map')
      .leftJoinAndSelect('map.phases', 'phases')
      .orderBy('map.order', 'ASC')
      .addOrderBy('phases.order', 'ASC')
      .getMany();

    return maps;
  }

  async findByOrder(order: number): Promise<Map> {
    const map = await this.repository.findOne({
      where: {
        order,
      },
      relations: ['phases'],
    });

    return map;
  }
}

export { MapsRepository };
