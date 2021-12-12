import { IAddActivitiesToPhaseDTO } from '@modules/game/dtos/IAddActivitiesToPhaseDTO';
import { InMemoryActivityRepository } from '@modules/game/repositories/in-memory/InMemoryActivityRepository';
import { InMemoryPhaseActivitiesRepository } from '@modules/game/repositories/in-memory/InMemoryPhaseActivitiesRepository';
import { InMemoryPhasesRepository } from '@modules/game/repositories/in-memory/InMemoryPhasesRepository';

import { AddActivitiesToPhaseUseCase } from './AddActivitiesToPhaseUseCase';
import { ActivityNotFoundError } from './errors/ActivityNotFoundError';
import { PhaseNotFoundError } from './errors/PhaseNotFoundError';

let inMemoryPhaseActivitiesRepository: InMemoryPhaseActivitiesRepository;
let inMemoryPhasesRepository: InMemoryPhasesRepository;
let inMemoryActivitiesRepository: InMemoryActivityRepository;
let addActivitiesToPhaseUseCase: AddActivitiesToPhaseUseCase;

enum enType {
  THEORY = 'theory',
  PRACTICE = 'practice',
}

describe('Add Activities to Phase', () => {
  beforeEach(() => {
    inMemoryPhaseActivitiesRepository = new InMemoryPhaseActivitiesRepository();
    inMemoryPhasesRepository = new InMemoryPhasesRepository();
    inMemoryActivitiesRepository = new InMemoryActivityRepository();
    addActivitiesToPhaseUseCase = new AddActivitiesToPhaseUseCase(
      inMemoryPhaseActivitiesRepository,
      inMemoryPhasesRepository,
      inMemoryActivitiesRepository
    );
  });

  it('should not be able to add activities to a non-existent phase', async () => {
    const activity = await inMemoryPhasesRepository.create({
      map_id: '123',
      max_level: 5,
      title: 'Atividade test',
      type: enType.PRACTICE,
    });

    const activitiesToPhase: IAddActivitiesToPhaseDTO = {
      activities_ids: [activity.id],
      phase_id: 'non-existent-id',
    };

    await expect(
      addActivitiesToPhaseUseCase.execute(activitiesToPhase)
    ).rejects.toEqual(new PhaseNotFoundError());
  });

  it('should not be able to add non-existents activities to a phase', async () => {
    const phase = await inMemoryPhasesRepository.create({
      map_id: '123',
      title: 'Fase teste',
      max_level: 5,
      type: enType.PRACTICE,
    });

    const activitiesToPhase: IAddActivitiesToPhaseDTO = {
      activities_ids: ['non-existent-id'],
      phase_id: phase.id,
    };

    await expect(
      addActivitiesToPhaseUseCase.execute(activitiesToPhase)
    ).rejects.toEqual(new ActivityNotFoundError('non-existent-id'));
  });
});
