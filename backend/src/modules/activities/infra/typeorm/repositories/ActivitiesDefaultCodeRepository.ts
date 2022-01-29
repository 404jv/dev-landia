import { getRepository, Repository } from 'typeorm';

import { ICreateOptionActivityDTO } from '@modules/activities/dtos/ICreateOptionActivityDTO';
import { IActivitiesOptionsRepository } from '@modules/activities/repositories/IActivitiesOptionsRepository';

import { ActivityDefaultCode } from '../entities/ActivityDefaultCode';
import { Option } from '../entities/Option';

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

  async findOptionsByActivityId(activity_id: string): Promise<Option[]> {
    const options = await this.repository.query(`
      SELECT options.*, adf.order
      FROM activities AS ac
      JOIN options ON options.activity_id = ac.id
      JOIN activity_default_code AS adf ON adf.activity_id = ac.id AND options.id = adf.option_id
      WHERE ac.id = '${activity_id}'
      ORDER BY adf.order;
    `);

    return options;
  }
}

export { ActivitiesDefaultCodeRepository };
