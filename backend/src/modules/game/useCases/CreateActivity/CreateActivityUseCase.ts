import { inject, injectable } from 'tsyringe';

import { ICreateActivityDTO } from '@modules/game/dtos/ICreateActivityDTO';
import { Activity } from '@modules/game/infra/typeorm/entities/Activity';
import { IActivitiesRepository } from '@modules/game/repositories/IActivitiesRepository';

@injectable()
class CreateActivityUseCase {
  constructor(
    @inject('ActivitiesRepository')
    private activityRepository: IActivitiesRepository
  ) {}

  async execute({
    description,
    title,
    type,
    is_needed_code = false,
  }: ICreateActivityDTO): Promise<Activity> {
    const activity = await this.activityRepository.create({
      description,
      title,
      type,
      is_needed_code,
    });

    return activity;
  }
}

export { CreateActivityUseCase };
