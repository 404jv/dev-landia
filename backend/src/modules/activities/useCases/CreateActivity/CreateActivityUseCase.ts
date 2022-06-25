import { inject, injectable } from 'tsyringe';

import { ICreateActivityDTO } from '@modules/activities/dtos/ICreateActivityDTO';
import { ICreateOptionDTO } from '@modules/activities/dtos/ICreateOptionDTO';
import { Activity } from '@modules/activities/infra/typeorm/entities/Activity';
import { Option } from '@modules/activities/infra/typeorm/entities/Option';
import { Tip } from '@modules/activities/infra/typeorm/entities/Tip';
import { IActivitiesRepository } from '@modules/activities/repositories/IActivitiesRepository';
import { IOptionsRepository } from '@modules/activities/repositories/IOptionsRepository';
import { ITipsRepository } from '@modules/activities/repositories/ITipsRepository';

@injectable()
class CreateActivityUseCase {
  constructor(
    @inject('ActivitiesRepository')
    private activityRepository: IActivitiesRepository,
    @inject('OptionsRepository')
    private optionsRepository: IOptionsRepository,
    @inject('TipsRepository')
    private tipsRepository: ITipsRepository
  ) {}

  async execute({
    description,
    title,
    type,
    is_needed_code = false,
    options = [],
    order,
    phase_id,
    tips,
  }: ICreateActivityDTO): Promise<Activity> {
    const activity = await this.activityRepository.create({
      description,
      title,
      type,
      is_needed_code,
      order,
      phase_id,
    });

    const optionsCreated = await this.createActivityOptions(
      options,
      activity.id
    );

    activity.options = optionsCreated;

    const tipsCreated = await this.createActivityTips(tips, activity.id);

    activity.tips = tipsCreated;

    return activity;
  }

  async createActivityOptions(
    options: ICreateOptionDTO[],
    activity_id: string
  ): Promise<Option[]> {
    const optionsCreated = await Promise.all(
      options.map(async (option) => {
        const { hexadecimal_color, name, type } = option;
        let { abstracted_name } = option;

        if (abstracted_name === undefined) {
          abstracted_name = name;
        }

        const optionCreated = await this.optionsRepository.create({
          activity_id,
          hexadecimal_color,
          name,
          type,
          abstracted_name,
        });

        return optionCreated;
      })
    );

    return optionsCreated;
  }

  async createActivityTips(
    tips: string[],
    activity_id: string
  ): Promise<Tip[]> {
    const tipsCreated = await Promise.all(
      tips.map(async (tip) => {
        const tipCreated = await this.tipsRepository.create(tip, activity_id);
        return tipCreated;
      })
    );

    return tipsCreated;
  }
}

export { CreateActivityUseCase };
