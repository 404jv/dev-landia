import { ICreatePhaseDTO } from '@modules/game/dtos/ICreatePhaseDTO';
import { Phase } from '@modules/game/infra/typeorm/entities/Phase';

import { IPhasesRepository } from '../IPhasesRepository';

class InMemoryPhasesRepository implements IPhasesRepository {
  private repository: Phase[] = [];

  async create(data: ICreatePhaseDTO): Promise<Phase> {
    const phase = new Phase();

    Object.assign(phase, data);
    this.repository.push(phase);

    return phase;
  }

  async list(): Promise<Phase[]> {
    return this.repository;
  }

  async findById(id: string): Promise<Phase> {
    return this.repository.find((phase) => phase.id === id);
  }

  async update({
    map_id,
    max_level,
    title,
    type,
    id,
    markdown_text,
  }: ICreatePhaseDTO): Promise<Phase> {
    const phase = await this.findById(id);

    Object.assign(phase, {
      map_id,
      max_level,
      title,
      type,
      id,
      markdown_text,
    });

    const phaseIndex = this.repository.indexOf(phase);
    this.repository.splice(phaseIndex, 1);

    this.repository.push(phase);

    return phase;
  }
}

export { InMemoryPhasesRepository };
