import { getRepository, Repository } from 'typeorm';

import { ICreateOptionActivityDTO } from '@modules/game/dtos/ICreateOptionActivityDTO';
import { IActivitiesAnswersRepository } from '@modules/game/repositories/IActivitiesAnswersRepository';

import { ActivityAnswer } from '../entities/ActivityAnswer';

class ActivitiesAnswersRepository implements IActivitiesAnswersRepository {
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
