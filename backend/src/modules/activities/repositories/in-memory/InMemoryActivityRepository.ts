import { ICreateActivityDTO } from '@modules/activities/dtos/ICreateActivityDTO';
import { IUpdateActivityDTO } from '@modules/activities/dtos/IUpdateActivityDTO';
import { Activity } from '@modules/activities/infra/typeorm/entities/Activity';

import { IActivitiesRepository } from '../IActivitiesRepository';

class InMemoryActivityRepository implements IActivitiesRepository {
  private repositories: Activity[] = [];

  async create({
    title,
    description,
    is_needed_code,
    type,
    order,
    phase_id,
  }: ICreateActivityDTO): Promise<Activity> {
    const activity = new Activity();

    Object.assign(activity, {
      title,
      description,
      type,
      is_needed_code,
      order,
      phase_id,
      created_at: new Date(),
    });
    this.repositories.push(activity);

    return activity;
  }

  list(): Promise<Activity[]> {
    throw new Error('Method not implemented.');
  }

  async findById(id: string): Promise<Activity> {
    return this.repositories.find((activity) => activity.id === id);
  }

  async findByIds(ids: string[]): Promise<Activity[]> {
    return this.repositories.filter((activity) => ids.includes(activity.id));
  }

  update(data: IUpdateActivityDTO): Promise<Activity> {
    throw new Error('Method not implemented.');
  }
}

export { InMemoryActivityRepository };
