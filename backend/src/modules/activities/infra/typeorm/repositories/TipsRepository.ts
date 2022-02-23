import { getRepository, Repository } from 'typeorm';

import { ITipsRepository } from '@modules/activities/repositories/ITipsRepository';

import { Tip } from '../entities/Tip';

class TipsRepository implements ITipsRepository {
  private repository: Repository<Tip>;

  constructor() {
    this.repository = getRepository(Tip);
  }

  create(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export { TipsRepository };
