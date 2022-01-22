import { ICreateOptionActivityDTO } from '@modules/game/dtos/ICreateOptionActivityDTO';
import { ActivityDefaultCode } from '@modules/game/infra/typeorm/entities/ActivityDefaultCode';
import { IActivitiesOptionsRepository } from '@modules/game/repositories/IActivitiesOptionsRepository';

class InMemoryActivitiesDefaultCodeRepository
  implements IActivitiesOptionsRepository
{
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
