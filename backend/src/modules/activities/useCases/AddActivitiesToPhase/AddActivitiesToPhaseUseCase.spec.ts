import { IAddActivitiesToPhaseDTO } from '@modules/activities/dtos/IAddActivitiesToPhaseDTO';
import { InMemoryActivityRepository } from '@modules/activities/repositories/in-memory/InMemoryActivityRepository';
import { InMemoryPhasesRepository } from '@modules/phases/repositories/in-memory/InMemoryPhasesRepository';

import { AddActivitiesToPhaseUseCase } from './AddActivitiesToPhaseUseCase';
import { PhaseNotFoundError } from './errors/PhaseNotFoundError';

let inMemoryPhasesRepository: InMemoryPhasesRepository;
let inMemoryActivitiesRepository: InMemoryActivityRepository;
let addActivitiesToPhaseUseCase: AddActivitiesToPhaseUseCase;

enum enType {
  THEORY = 'theory',
  PRACTICE = 'practice',
}

enum enActivityType {
  BLOCK_ACTIVITY = 'block_activity',
  QUIZ = 'quiz',
}

describe('Add Activities to Phase', () => {
  beforeEach(() => {
    inMemoryPhasesRepository = new InMemoryPhasesRepository();
    inMemoryActivitiesRepository = new InMemoryActivityRepository();
    addActivitiesToPhaseUseCase = new AddActivitiesToPhaseUseCase(
      inMemoryPhasesRepository,
      inMemoryActivitiesRepository
    );
  });

  it('should be able to add activities to a phase', async () => {
    const activity = await inMemoryActivitiesRepository.create({
      description: 'Atividade Test',
      title: 'Atividade test',
      type: enActivityType.BLOCK_ACTIVITY,
      is_needed_code: false,
      order: 1,
    });

    const phase = await inMemoryPhasesRepository.create({
      map_id: '123',
      title: 'Fase teste',
      max_level: 5,
      type: enType.PRACTICE,
      order: 1,
    });

    await addActivitiesToPhaseUseCase.execute({
      phase_id: phase.id,
      activities_ids: [activity.id],
    });
  });

  it('should not be able to add activities to a non-existent phase', async () => {
    const activity = await inMemoryPhasesRepository.create({
      map_id: '123',
      max_level: 5,
      title: 'Atividade test',
      type: enType.PRACTICE,
      order: 1,
    });

    const activitiesToPhase: IAddActivitiesToPhaseDTO = {
      activities_ids: [activity.id],
      phase_id: 'non-existent-id',
    };

    await expect(
      addActivitiesToPhaseUseCase.execute(activitiesToPhase)
    ).rejects.toEqual(new PhaseNotFoundError());
  });
});
