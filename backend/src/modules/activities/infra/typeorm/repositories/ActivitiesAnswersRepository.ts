import { getRepository, Repository } from 'typeorm';

import { ICreateOptionActivityDTO } from '@modules/activities/dtos/ICreateOptionActivityDTO';
import { IActivitiesOptionsRepository } from '@modules/activities/repositories/IActivitiesOptionsRepository';

import { ActivityAnswer } from '../entities/ActivityAnswer';
import { Option } from '../entities/Option';

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

  async findOptionsByActivityId(activity_id: string): Promise<Option[]> {
    throw new Error('Method not implemented.');
  }

  async deleteAllByActivityId(activity_id: string): Promise<void> {
    await this.repository
      .createQueryBuilder('activity_answer')
      .delete()
      .where('activity_answer.activity_id = activity_id', { activity_id })
      .execute();
  }
}

export { ActivitiesAnswersRepository };
