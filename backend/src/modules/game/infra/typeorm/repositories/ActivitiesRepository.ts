import { getRepository, Repository } from 'typeorm';

import { ICreateActivityDTO } from '@modules/game/dtos/ICreateActivityDTO';
import { IActivitiesRepository } from '@modules/game/repositories/IActivitiesRepository';

import { Activity } from '../entities/Activity';

class ActivitiesRepository implements IActivitiesRepository {
  private repository: Repository<Activity>;

  constructor() {
    this.repository = getRepository(Activity);
  }

  async create({
    description,
    title,
    type,
    is_needed_code,
  }: ICreateActivityDTO): Promise<Activity> {
    const activity = this.repository.create({
      description,
      title,
      type,
      is_needed_code,
    });

    await this.repository.save(activity);

    return activity;
  }
}

export { ActivitiesRepository };
