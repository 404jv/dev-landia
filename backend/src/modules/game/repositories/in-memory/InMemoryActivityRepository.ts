import { ICreateActivityDTO } from '@modules/game/dtos/ICreateActivityDTO';
import { Activity } from '@modules/game/infra/typeorm/entities/Activity';

import { IActivitiesRepository } from '../IActivitiesRepository';

class InMemoryActivityRepository implements IActivitiesRepository {
  private repositories: Activity[] = [];

  async create({
    title,
    description,
    is_needed_code,
    type,
  }: ICreateActivityDTO): Promise<Activity> {
    const activity = new Activity();

    Object.assign(activity, {
      title,
      description,
      type,
      is_needed_code,
      created_at: new Date(),
    });

    return activity;
  }

  async findById(id: string): Promise<Activity> {
    return this.repositories.find((activity) => activity.id === id);
  }
}

export { InMemoryActivityRepository };
