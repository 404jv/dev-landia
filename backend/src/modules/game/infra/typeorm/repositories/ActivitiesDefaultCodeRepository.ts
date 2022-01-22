import { getRepository, Repository } from 'typeorm';

import { ICreateOptionActivityDTO } from '@modules/game/dtos/ICreateOptionActivityDTO';
import { IActivitiesOptionsRepository } from '@modules/game/repositories/IActivitiesOptionsRepository';

import { ActivityDefaultCode } from '../entities/ActivityDefaultCode';

class ActivitiesDefaultCodeRepository implements IActivitiesOptionsRepository {
  private repository: Repository<ActivityDefaultCode>;

  constructor() {
    this.repository = getRepository(ActivityDefaultCode);
  }

  async create({
    activity_id,
    option_id,
    order,
  }: ICreateOptionActivityDTO): Promise<void> {
    const activityCode = this.repository.create({
      activity_id,
      option_id,
      order,
    });

    await this.repository.save(activityCode);
  }
}

export { ActivitiesDefaultCodeRepository };
