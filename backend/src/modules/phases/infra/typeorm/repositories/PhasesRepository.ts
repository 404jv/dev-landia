import { getRepository, Repository } from 'typeorm';

import { ICreatePhaseDTO } from '@modules/phases/dtos/ICreatePhaseDTO';
import { IPhasesRepository } from '@modules/phases/repositories/IPhasesRepository';

import { Phase } from '../entities/Phase';

class PhasesRepository implements IPhasesRepository {
  private repository: Repository<Phase>;

  constructor() {
    this.repository = getRepository(Phase);
  }
  async create({
    map_id,
    max_level,
    title,
    type,
    description,
    markdown_text,
    order,
  }: ICreatePhaseDTO): Promise<Phase> {
    const phase = this.repository.create({
      max_level,
      map_id,
      title,
      type,
      description,
      markdown_text,
      order,
    });

    await this.repository.save(phase);
    return phase;
  }

  async list(): Promise<Phase[]> {
    const phases = await this.repository.query('SELECT * FROM phases');
    return phases;
  }

  async findById(id: string): Promise<Phase> {
    const phase = this.repository.findOne({
      where: {
        id,
      },
      relations: ['activities'],
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
    const phase = await this.repository
      .createQueryBuilder('phase')
      .where('phase.id = :id')
      .innerJoinAndSelect('phase.activities', 'activities')
      .where('activities.order >= :start')
      .andWhere('activities.order <= :end')
      .leftJoinAndSelect('activities.options', 'options')
      .leftJoinAndSelect('activities.tips', 'tips')
      .orderBy('activities.order', 'ASC')
      .setParameters({ start, end, id })
      .getOne();

    return phase;
  }
}

export { PhasesRepository };
