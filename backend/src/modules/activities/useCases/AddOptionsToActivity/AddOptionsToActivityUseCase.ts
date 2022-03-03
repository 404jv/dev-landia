import { inject, injectable } from 'tsyringe';

import { IAddOptionsToActivityDTO } from '@modules/activities/dtos/IAddOptionsToActivityDTO';
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
  }: IAddOptionsToActivityDTO): Promise<void> {
    const activity = await this.activitiesRepository.findById(activity_id);

    if (!activity) {
      throw new ActivityNotFoundError();
    }

    await Promise.all([
      this.defaultCodeRepository.deleteAllByActivityId(activity_id),
      this.activitiesAnswersRepository.deleteAllByActivityId(activity_id),
    ]);

    await Promise.all([
      activityDefaultCodeOptionsIds.forEach((option_id, index) => {
        this.defaultCodeRepository.create({
          activity_id,
          option_id,
          order: index + 1,
        });
      }),
      activityAnswerOptionsIds.forEach((option_id, index) => {
        this.activitiesAnswersRepository.create({
          activity_id,
          option_id,
          order: index + 1,
        });
      }),
    ]);
  }
}

export { AddOptionsToActivityUseCase };
