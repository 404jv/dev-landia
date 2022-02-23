import { Tip } from '@modules/activities/infra/typeorm/entities/Tip';

import { ITipsRepository } from '../ITipsRepository';

class InMemoryTipsRepository implements ITipsRepository {
  private repository: Tip[] = [];

  create(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export { InMemoryTipsRepository };
