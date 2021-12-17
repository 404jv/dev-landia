import { getRepository, Repository } from 'typeorm';

import { ICreatePhaseDTO } from '@modules/game/dtos/ICreatePhaseDTO';
import { IPhasesRepository } from '@modules/game/repositories/IPhasesRepository';

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
    markdown_text,
  }: ICreatePhaseDTO): Promise<Phase> {
    const phase = this.repository.create({
      max_level,
      map_id,
      title,
      type,
      markdown_text,
    });

    await this.repository.save(phase);
    return phase;
  }

  async list(): Promise<Phase[]> {
    const phases = await this.repository.query('SELECT * FROM phases');
    return phases;
  }

  async findById(id: string): Promise<Phase> {
    const phase = this.repository.findOne(id);
    return phase;
  }

  async update({
    map_id,
    max_level,
    title,
    type,
    id,
    markdown_text,
    activities,
  }: ICreatePhaseDTO): Promise<Phase> {
    const phase = this.repository.create({
      max_level,
      map_id,
      title,
      type,
      markdown_text,
      id,
      activities,
    });

    await this.repository.save(phase);

    return phase;
  }
}

export { PhasesRepository };
