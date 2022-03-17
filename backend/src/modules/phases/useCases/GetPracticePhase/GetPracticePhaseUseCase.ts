import { inject, injectable } from 'tsyringe';

import { Activity } from '@modules/activities/infra/typeorm/entities/Activity';
import { Option } from '@modules/activities/infra/typeorm/entities/Option';
import { IActivitiesOptionsRepository } from '@modules/activities/repositories/IActivitiesOptionsRepository';
import { IUsersPhasesRepository } from '@modules/game/repositories/IUsersPhasesRepository';
import { Phase } from '@modules/phases/infra/typeorm/entities/Phase';
import { IPhasesRepository } from '@modules/phases/repositories/IPhasesRepository';

const TOTAL_ACTIVITIES_PER_LEVEL = 5;

@injectable()
class GetPracticePhaseUseCase {
  constructor(
    @inject('PhasesRepository')
    private phasesRepository: IPhasesRepository,
    @inject('ActivitiesAnswersRepository')
    private activitiesAnswersRepository: IActivitiesOptionsRepository,
    @inject('ActivitiesDefaultCodeRepository')
    private activitiesDefaultCodeRepository: IActivitiesOptionsRepository,
    @inject('UsersPhasesRepository')
    private usersPhasesRepository: IUsersPhasesRepository
  ) {}

  async execute(
    phase_id: string,
    user_id: string
  ): Promise<Activity[] | Phase> {
    const { current_level } =
      await this.usersPhasesRepository.findByUserAndPhase(user_id, phase_id);

    let activitiesEnd = current_level * TOTAL_ACTIVITIES_PER_LEVEL - 1;
    const activitiesStart = activitiesEnd - 4;

    if (activitiesEnd <= 0) {
      activitiesEnd = 4;
    }

    const phase = await this.phasesRepository.findAndSelectActivities(
      phase_id,
      activitiesStart,
      activitiesEnd
    );

    const { activities } = phase;

    const activitiesWithOptions = await Promise.all(
      activities.map(async (activity) => {
        const [activityAnswer, defaultCode] =
          await this.getActivityAnswerAndDefaultCode(activity.id);

        activity.activity_answer = activityAnswer;
        activity.default_code = defaultCode;

        return activity;
      })
    );

    return activitiesWithOptions;
  }

  private async getActivityAnswerAndDefaultCode(
    activity_id: string
  ): Promise<Option[][]> {
    const activityAnswer =
      await this.activitiesAnswersRepository.findOptionsByActivityId(
        activity_id
      );

    const defaultCode =
      await this.activitiesDefaultCodeRepository.findOptionsByActivityId(
        activity_id
      );

    return [activityAnswer, defaultCode];
  }
}

export { GetPracticePhaseUseCase };
