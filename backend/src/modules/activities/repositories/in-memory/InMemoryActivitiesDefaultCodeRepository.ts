import { ICreateOptionActivityDTO } from '@modules/activities/dtos/ICreateOptionActivityDTO';
import { ActivityDefaultCode } from '@modules/activities/infra/typeorm/entities/ActivityDefaultCode';
import { Option } from '@modules/activities/infra/typeorm/entities/Option';
import { IActivitiesOptionsRepository } from '@modules/activities/repositories/IActivitiesOptionsRepository';

class InMemoryActivitiesDefaultCodeRepository
  implements IActivitiesOptionsRepository
{
  findOptionsByActivityId(activity_id: string): Promise<Option[]> {
    throw new Error('Method not implemented.');
  }
  deleteAllByActivityId(activity_id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  private repository: ActivityDefaultCode[] = [];

  async create({
    activity_id,
    option_id,
    order,
  }: ICreateOptionActivityDTO): Promise<void> {
    const activityCode = new ActivityDefaultCode();

    Object.assign(activityCode, {
      activity_id,
      option_id,
      order,
    });

    this.repository.push(activityCode);
  }
}

export { InMemoryActivitiesDefaultCodeRepository };
