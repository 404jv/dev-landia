import { getRepository, Repository } from 'typeorm';

import { ITipsRepository } from '@modules/activities/repositories/ITipsRepository';

import { Tip } from '../entities/Tip';

class TipsRepository implements ITipsRepository {
  private repository: Repository<Tip>;

  constructor() {
    this.repository = getRepository(Tip);
  }

  async create(name: string, activity_id: string): Promise<Tip> {
    const tip = this.repository.create({
      name,
      activity_id,
    });

    await this.repository.save(tip);

    return tip;
  }
}

export { TipsRepository };
