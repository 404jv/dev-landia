import { inject, injectable } from 'tsyringe';

import { Activity } from '@modules/activities/infra/typeorm/entities/Activity';
import { IActivitiesOptionsRepository } from '@modules/activities/repositories/IActivitiesOptionsRepository';
import { Phase } from '@modules/phases/infra/typeorm/entities/Phase';
import { IPhasesRepository } from '@modules/phases/repositories/IPhasesRepository';

enum enType {
  THEORY = 'theory',
  PRACTICE = 'practice',
}

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

  async execute(
    phase_id: string,
    phaseLevel: number
  ): Promise<Activity[] | Phase> {
    let activitiesEnd = phaseLevel * TOTAL_ACTIVITIES_PER_LEVEL - 1;
    const activitiesStart = activitiesEnd - 4;

    if (activitiesEnd <= 0) {
      activitiesEnd = 4;
    }

    const phase = await this.phasesRepository.findAndSelectActivities(
      phase_id,
      activitiesStart,
      activitiesEnd
    );

    console.log(phase);

    // return phase theory

    if (phase.type === enType.THEORY) {
      console.log('oi111111');
      return phase;
    }

    const { activities } = phase;

    const activitiesWithAnswer = await Promise.all(
      activities.map(async (activity) => {
        const activityAnswer =
          await this.activitiesAnswersRepository.findOptionsByActivityId(
            activity.id
          );

        const defaultCode =
          await this.activitiesDefaultCodeRepository.findOptionsByActivityId(
            activity.id
          );

        activity.default_code = defaultCode;
        activity.activity_answer = activityAnswer;

        return activity;
      })
    );

    return activitiesWithAnswer;
  }
}

export { GetPhaseUseCase };
