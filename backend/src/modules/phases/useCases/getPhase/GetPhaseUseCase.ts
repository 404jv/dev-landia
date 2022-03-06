import { inject, injectable } from 'tsyringe';

import { Activity } from '@modules/activities/infra/typeorm/entities/Activity';
import { IActivitiesOptionsRepository } from '@modules/activities/repositories/IActivitiesOptionsRepository';
import { IPhasesRepository } from '@modules/phases/repositories/IPhasesRepository';

const TOTAL_ACTIVITIES_PER_LEVEL = 5;

@injectable()
class GetPhaseUseCase {
  constructor(
    @inject('PhasesRepository')
    private phasesRepository: IPhasesRepository,
    @inject('ActivitiesAnswersRepository')
    private activitiesAnswersRepository: IActivitiesOptionsRepository,
    @inject('ActivitiesDefaultCodeRepository')
    private activitiesDefaultCodeRepository: IActivitiesOptionsRepository
  ) {}

  async execute(phase_id: string, phaseLevel: number): Promise<Activity[]> {
    let activitiesEnd = phaseLevel * TOTAL_ACTIVITIES_PER_LEVEL - 1;
    const activitiesStart = activitiesEnd - 4;

    if (activitiesEnd <= 0) {
      activitiesEnd = 4;
    }

    const { activities } = await this.phasesRepository.findAndSelectActivities(
      phase_id,
      activitiesStart,
      activitiesEnd
    );

    const activitiesWithAnswer = await Promise.all(
      activities.map(async (activity) => {
        const activity_answer =
          await this.activitiesAnswersRepository.findOptionsByActivityId(
            activity.id
          );

        const default_code =
          await this.activitiesDefaultCodeRepository.findOptionsByActivityId(
            activity.id
          );

        Object.assign(activity, {
          activity_answer,
          default_code,
        });

        return activity;
      })
    );

    return activitiesWithAnswer;
  }
}

export { GetPhaseUseCase };
