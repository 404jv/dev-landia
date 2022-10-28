import { inject, injectable } from 'tsyringe';

import { ICreateActivityDTO } from '@modules/activities/dtos/ICreateActivityDTO';
import { IActivitiesRepository } from '@modules/activities/repositories/IActivitiesRepository';
import { ITipsRepository } from '@modules/activities/repositories/ITipsRepository';

import { ActivityDoesNotExistsError } from './errors/ActivityDoesNotExistsError';

@injectable()
class UpdateActivityUseCase {
  constructor(
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
    @inject('TipsRepository')
    private tipsRepository: ITipsRepository
  ) {}

  async execute({
    id,
    title,
    description,
    order,
    tips,
    is_needed_code,
    phase_id,
    type,
  }: ICreateActivityDTO) {
    const activity = await this.activitiesRepository.findById(id);

    if (!activity) {
      throw new ActivityDoesNotExistsError();
    }

    await this.tipsRepository.deleteByActivityId(id);

    tips.map(async (tip) => {
      await this.tipsRepository.create(tip, id);
    });

    const updatedActivity = await this.activitiesRepository.update({
      id,
      title,
      description,
      order,
      type,
      is_needed_code,
      activity_answer: activity.activity_answer,
      default_code: activity.default_code,
      options: activity.options,
      phase_id,
    });

    return {
      updatedActivity,
    };
  }
}

export { UpdateActivityUseCase };
