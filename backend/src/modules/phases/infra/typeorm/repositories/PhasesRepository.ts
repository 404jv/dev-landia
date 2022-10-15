import { Between, Repository } from 'typeorm';

import { ICreatePhaseDTO } from '@modules/phases/dtos/ICreatePhaseDTO';
import { IPhasesRepository } from '@modules/phases/repositories/IPhasesRepository';
import { postgresDatabaseSource } from '@shared/infra/typeorm';

import { Phase } from '../entities/Phase';

class PhasesRepository implements IPhasesRepository {
  private repository: Repository<Phase>;

  constructor() {
    this.repository = postgresDatabaseSource.getRepository(Phase);
  }
  async create({
    map_id,
    max_level,
    title,
    type,
    description,
    markdown_text,
    order,
    hexadecimal_color,
  }: ICreatePhaseDTO): Promise<Phase> {
    const phase = this.repository.create({
      max_level,
      map_id,
      title,
      type,
      description,
      markdown_text,
      order,
      hexadecimal_color,
    });

    await this.repository.save(phase);
    return phase;
  }

  async list(): Promise<Phase[]> {
    const phases = await this.repository.find({
      relations: {
        map: true,
      },
    });
    return phases;
  }

  async findById(id: string): Promise<Phase> {
    const phase = this.repository.findOne({
      where: {
        id,
      },
      relations: {
        activities: true,
      },
    });
    return phase;
  }

  async update({
    map_id,
    max_level,
    title,
    type,
    id,
    markdown_text,
    description,
    activities,
    order,
  }: ICreatePhaseDTO): Promise<Phase> {
    const phase = this.repository.create({
      max_level,
      map_id,
      title,
      type,
      markdown_text,
      description,
      id,
      order,
      activities,
    });

    await this.repository.save(phase);

    return phase;
  }

  async findAndSelectActivities(
    id: string,
    start: number,
    end: number
  ): Promise<Phase> {
    const phase = await this.repository.findOne({
      relations: {
        activities: {
          options: true,
          tips: true,
        },
      },
      where: {
        id,
        activities: {
          order: Between(start, end),
        },
      },
      order: {
        activities: {
          order: 'ASC',
        },
      },
    });

    return phase;
  }
}

export { PhasesRepository };
