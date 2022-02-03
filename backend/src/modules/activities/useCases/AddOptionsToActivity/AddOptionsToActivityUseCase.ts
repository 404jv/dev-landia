import { inject, injectable } from 'tsyringe';

import { IAddOptionsToActivityDTO } from '@modules/activities/dtos/IAddOptionsToActivityDTO';
import { Activity } from '@modules/activities/infra/typeorm/entities/Activity';
import { IActivitiesOptionsRepository } from '@modules/activities/repositories/IActivitiesOptionsRepository';
import { IActivitiesRepository } from '@modules/activities/repositories/IActivitiesRepository';

import { ActivityNotFoundError } from './errors/PhaseNotFoundError';

@injectable()
class AddOptionsToActivityUseCase {
  constructor(
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
    @inject('ActivitiesDefaultCodeRepository')
    private defaultCodeRepository: IActivitiesOptionsRepository,
    @inject('ActivitiesAnswersRepository')
    private activitiesAnswersRepository: IActivitiesOptionsRepository
  ) {}

  async execute({
    activityAnswerOptionsIds,
    activityDefaultCodeOptionsIds,
    activity_id,
  }: IAddOptionsToActivityDTO): Promise<Activity> {
    const activity = await this.activitiesRepository.findById(activity_id);

    if (!activity) {
      throw new ActivityNotFoundError();
    }

    this.defaultCodeRepository.deleteAllByActivityId(activity_id);
    this.activitiesAnswersRepository.deleteAllByActivityId(activity_id);

    activityDefaultCodeOptionsIds.map(async (option_id, index) => {
      await this.defaultCodeRepository.create({
        activity_id,
        option_id,
        order: index + 1,
      });
    });

    const defaultCode =
      await this.defaultCodeRepository.findOptionsByActivityId(activity_id);

    activity.default_code = defaultCode;

    activityAnswerOptionsIds.map(async (option_id, index) => {
      await this.activitiesAnswersRepository.create({
        activity_id,
        option_id,
        order: index + 1,
      });
    });

    const activityAnswer =
      await this.activitiesAnswersRepository.findOptionsByActivityId(
        activity_id
      );

    activity.activity_answer = activityAnswer;

    return activity;
  }
}

export { AddOptionsToActivityUseCase };
