import { Repository, getRepository } from 'typeorm';

import { ICreateActivityDTO } from '@modules/activities/dtos/ICreateActivityDTO';
import { IUpdateActivityDTO } from '@modules/activities/dtos/IUpdateActivityDTO';
import { IActivitiesRepository } from '@modules/activities/repositories/IActivitiesRepository';

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
    order,
    phase_id,
  }: ICreateActivityDTO): Promise<Activity> {
    const activity = this.repository.create({
      description,
      title,
      type,
      is_needed_code,
      order,
      phase_id,
    });

    await this.repository.save(activity);

    return activity;
  }

  async list() {
    const activities = await this.repository.find({
      relations: ['phases', 'tips'],
    });

    return activities;
  }

  async findById(id: string): Promise<Activity> {
    const activity = await this.repository.findOne({
      where: { id },
      relations: ['options', 'tips'],
    });

    return activity;
  }

  async findByIds(ids: string[]): Promise<Activity[]> {
    const activities = await this.repository.findByIds(ids);
    return activities;
  }

  async update(data: IUpdateActivityDTO): Promise<Activity> {
    const activity = await this.repository.save(data);
    return activity;
  }
}

export { ActivitiesRepository };
