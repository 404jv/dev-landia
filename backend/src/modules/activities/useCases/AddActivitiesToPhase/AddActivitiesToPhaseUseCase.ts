import { inject, injectable } from 'tsyringe';

import { IAddActivitiesToPhaseDTO } from '@modules/activities/dtos/IAddActivitiesToPhaseDTO';
import { IActivitiesRepository } from '@modules/activities/repositories/IActivitiesRepository';
import { Phase } from '@modules/game/infra/typeorm/entities/Phase';
import { IPhasesRepository } from '@modules/game/repositories/IPhasesRepository';

import { PhaseNotFoundError } from './errors/PhaseNotFoundError';

@injectable()
class AddActivitiesToPhaseUseCase {
  constructor(
    @inject('PhasesRepository')
    private phasesRepository: IPhasesRepository,
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository
  ) {}

  async execute({
    activities_ids,
    phase_id,
  }: IAddActivitiesToPhaseDTO): Promise<Phase> {
    const phaseExists = await this.phasesRepository.findById(phase_id);

    if (!phaseExists) {
      throw new PhaseNotFoundError();
    }

    const activities = await this.activitiesRepository.findByIds(
      activities_ids
    );

    phaseExists.activities.push(...activities);

    await this.phasesRepository.update(phaseExists);

    return phaseExists;
  }
}

export { AddActivitiesToPhaseUseCase };
