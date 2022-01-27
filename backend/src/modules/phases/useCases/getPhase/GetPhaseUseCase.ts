import { inject, injectable } from 'tsyringe';

import { Activity } from '@modules/activities/infra/typeorm/entities/Activity';
import { IPhasesRepository } from '@modules/phases/repositories/IPhasesRepository';

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
