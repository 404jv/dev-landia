import { inject, injectable } from 'tsyringe';

import { Activity } from '@modules/game/infra/typeorm/entities/Activity';
import { IActivitiesRepository } from '@modules/game/repositories/IActivitiesRepository';
import { IPhasesRepository } from '@modules/game/repositories/IPhasesRepository';

@injectable()
class GetPhaseUseCase {
  constructor(
    @inject('PhasesRepository')
    private phasesRepository: IPhasesRepository
  ) {}

  async execute(phase_id: string, phaseLevel: number): Promise<Activity[]> {
    const activitiesEnd = phaseLevel * 5 - 1;
    const activitiesStart = activitiesEnd - 4;

    const phase = await this.phasesRepository.findAndSelectActivities(
      phase_id,
      activitiesStart,
      activitiesEnd
    );

    return phase.activities;
  }
}

export { GetPhaseUseCase };