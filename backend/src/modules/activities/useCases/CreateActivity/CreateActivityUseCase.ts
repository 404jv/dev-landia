import { inject, injectable } from 'tsyringe';

import { ICreateActivityDTO } from '@modules/activities/dtos/ICreateActivityDTO';
import { Activity } from '@modules/activities/infra/typeorm/entities/Activity';
import { IActivitiesRepository } from '@modules/activities/repositories/IActivitiesRepository';
import { IOptionsRepository } from '@modules/activities/repositories/IOptionsRepository';

@injectable()
class CreateActivityUseCase {
  constructor(
    @inject('ActivitiesRepository')
    private activityRepository: IActivitiesRepository,
    @inject('OptionsRepository')
    private optionsRepository: IOptionsRepository
  ) {}

  async execute({
    description,
    title,
    type,
    is_needed_code = false,
    options = [],
    order,
  }: ICreateActivityDTO): Promise<Activity> {
    const activity = await this.activityRepository.create({
      description,
      title,
      type,
      is_needed_code,
      order,
    });

    const optionsCreated = await Promise.all(
      options.map(async (option) => {
        const { hexadecimal_color, name, type } = option;

        const optionCreated = await this.optionsRepository.create({
          activity_id: activity.id,
          hexadecimal_color,
          name,
          type,
        });

        return optionCreated;
      })
    );

    Object.assign(activity, {
      options: optionsCreated,
    });

    return activity;
  }
}

export { CreateActivityUseCase };
