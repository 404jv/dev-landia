import { inject, injectable } from 'tsyringe';

import { ICreateActivityDTO } from '@modules/game/dtos/ICreateActivityDTO';
import { Activity } from '@modules/game/infra/typeorm/entities/Activity';
import { IActivitiesRepository } from '@modules/game/repositories/IActivitiesRepository';
import { IOptionsRepository } from '@modules/game/repositories/IOptionsRepository';

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
    const { id: activity_id } = await this.activityRepository.create({
      description,
      title,
      type,
      is_needed_code,
      order,
    });

    options.map(async (option) => {
      const { hexadecimal_color, name, type } = option;

      await this.optionsRepository.create({
        activity_id,
        hexadecimal_color,
        name,
        type,
      });
    });

    const activityWithOptions = await this.activityRepository.findById(
      activity_id
    );

    return activityWithOptions;
  }
}

export { CreateActivityUseCase };
