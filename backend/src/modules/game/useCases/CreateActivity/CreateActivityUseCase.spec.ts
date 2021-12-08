import { InMemoryActivityRepository } from '@modules/game/repositories/in-memory/InMemoryActivityRepository';

import { CreateActivityUseCase } from './CreateActivityUseCase';

let createActivityUseCase: CreateActivityUseCase;
let inMemoryActivitiesRepository: InMemoryActivityRepository;

enum enActivityType {
  BLOCK_ACTIVITY = 'block_activity',
  QUIZ = 'quiz',
}

describe('Create activity', () => {
  beforeEach(() => {
    inMemoryActivitiesRepository = new InMemoryActivityRepository();
    createActivityUseCase = new CreateActivityUseCase(
      inMemoryActivitiesRepository
    );
  });

  it('should be able to create an activity', async () => {
    const result = await createActivityUseCase.execute({
      description: 'Description',
      title: 'Title',
      type: enActivityType.BLOCK_ACTIVITY,
    });

    expect(result).toHaveProperty('id');
    expect(result.title).toEqual('Title');
    expect(result.description).toEqual('Description');
    expect(result.type).toEqual(enActivityType.BLOCK_ACTIVITY);
    expect(result.is_needed_code).toBeFalsy();
  });
});
