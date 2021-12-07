import { ICreatePhaseDTO } from '@modules/game/dtos/ICreatePhaseDTO';
import { Phase } from '@modules/game/infra/typeorm/entities/Phase';

import { IPhasesRepository } from '../IPhasesRepository';

class InMemoryPhaseRepository implements IPhasesRepository {
  private repository: Phase[] = [];

  async create(data: ICreatePhaseDTO): Promise<Phase> {
    const phase = new Phase();

    Object.assign(phase, data);
    this.repository.push(phase);

    return phase;
  }
}

export { InMemoryPhaseRepository };
