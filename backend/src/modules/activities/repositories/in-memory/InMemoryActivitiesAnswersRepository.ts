import { ICreateOptionActivityDTO } from '@modules/activities/dtos/ICreateOptionActivityDTO';
import { ActivityAnswer } from '@modules/activities/infra/typeorm/entities/ActivityAnswer';

import { IActivitiesOptionsRepository } from '../IActivitiesOptionsRepository';

class InMemoryActivitiesAnswersRepository
  implements IActivitiesOptionsRepository
{
  private repository: ActivityAnswer[] = [];

  async create({
    activity_id,
    option_id,
    order,
  }: ICreateOptionActivityDTO): Promise<void> {
    const activityAnswer = new ActivityAnswer();

    Object.assign(activityAnswer, {
      activity_id,
      option_id,
      order,
    });

    this.repository.push(activityAnswer);
  }
}

export { InMemoryActivitiesAnswersRepository };
