import { Tip } from '@modules/activities/infra/typeorm/entities/Tip';

import { ITipsRepository } from '../ITipsRepository';

class InMemoryTipsRepository implements ITipsRepository {
  private repository: Tip[] = [];

  async create(name: string, activity_id: string): Promise<Tip> {
    const tip = new Tip();

    Object.assign(tip, {
      name,
      activity_id,
    });

    this.repository.push(tip);

    return tip;
  }
}

export { InMemoryTipsRepository };
