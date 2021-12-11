import { IAddActivitiesToPhaseDTO } from '@modules/game/dtos/IAddActivitiesToPhaseDTO';
import { InMemoryPhaseActivitiesRepository } from '@modules/game/repositories/in-memory/InMemoryPhaseActivitiesRepository';
import { InMemoryPhasesRepository } from '@modules/game/repositories/in-memory/InMemoryPhasesRepository';

import { AddActivitiesToPhaseUseCase } from './AddActivitiesToPhaseUseCase';
import { PhaseNotFoundError } from './errors/PhaseNotFoundError';

let inMemoryPhaseActivitiesRepository: InMemoryPhaseActivitiesRepository;
let inMemoryPhasesRepository: InMemoryPhasesRepository;
let addActivitiesToPhaseUseCase: AddActivitiesToPhaseUseCase;

describe('Add Activities to Phase', () => {
  beforeEach(() => {
    inMemoryPhaseActivitiesRepository = new InMemoryPhaseActivitiesRepository();
    inMemoryPhasesRepository = new InMemoryPhasesRepository();
    addActivitiesToPhaseUseCase = new AddActivitiesToPhaseUseCase(
      inMemoryPhaseActivitiesRepository,
      inMemoryPhasesRepository
    );
  });

  it('should not be able to add activities to a non-existent phase', async () => {
    const phase: IAddActivitiesToPhaseDTO = {
      activities_ids: ['1234'],
      phase_id: 'non-existent-id',
    };

    await expect(addActivitiesToPhaseUseCase.execute(phase)).rejects.toEqual(
      new PhaseNotFoundError()
    );
  });
});
