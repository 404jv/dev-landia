import { getRepository, Repository } from 'typeorm';

import { ICreateOptionActivityDTO } from '@modules/activities/dtos/ICreateOptionActivityDTO';
import { IActivitiesOptionsRepository } from '@modules/activities/repositories/IActivitiesOptionsRepository';

import { ActivityAnswer } from '../entities/ActivityAnswer';

class ActivitiesAnswersRepository implements IActivitiesOptionsRepository {
  private repository: Repository<ActivityAnswer>;

  constructor() {
    this.repository = getRepository(ActivityAnswer);
  }

  async create({
    activity_id,
    option_id,
    order,
  }: ICreateOptionActivityDTO): Promise<void> {
    const activityAnswer = this.repository.create({
      activity_id,
      option_id,
      order,
    });

    await this.repository.save(activityAnswer);
  }
}

export { ActivitiesAnswersRepository };
