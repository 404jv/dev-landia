import { ICreatePhaseDTO } from '@modules/game/dtos/ICreatePhaseDTO';
import { InMemoryPhaseRepository } from '@modules/game/repositories/in-memory/InMemoryPhaseRepository';

import { CreatePhaseUseCase } from './CreatePhaseUseCase';
import { InvalidMaxLevelError } from './errors/InvalidMaxLevelError';

let inMemoryPhasesRepository: InMemoryPhaseRepository;
let createPhaseUseCase: CreatePhaseUseCase;

enum enType {
  THEORY = 'theory',
  PRACTICE = 'practice',
}

describe('Create Phase', () => {
  beforeEach(() => {
    inMemoryPhasesRepository = new InMemoryPhaseRepository();
    createPhaseUseCase = new CreatePhaseUseCase(inMemoryPhasesRepository);
  });

  it('should be able to create a practice phase', async () => {
    const phase: ICreatePhaseDTO = {
      map_id: '123456',
      max_level: 3,
      title: 'Fase prática test',
      type: enType.PRACTICE,
    };

    const result = await createPhaseUseCase.execute(phase);

    expect(result).toHaveProperty('id');
    expect(result.max_level).toEqual(phase.max_level);
    expect(result.title).toEqual(phase.title);
    expect(result.type).toEqual(enType.PRACTICE);
    expect(result.markdown_text).toBeFalsy();
  });

  it('should be able to create a theory phase', async () => {
    const phase: ICreatePhaseDTO = {
      map_id: '123456',
      max_level: 1,
      title: 'Fase teórica fase',
      type: enType.THEORY,
      markdown_text: '## oi',
    };

    const result = await createPhaseUseCase.execute(phase);

    expect(result).toHaveProperty('id');
    expect(result.max_level).toEqual(1);
    expect(result.title).toEqual(phase.title);
    expect(result.type).toEqual(enType.THEORY);
    expect(result.markdown_text).toEqual(phase.markdown_text);
  });

  it('should not be able to create a practice phase with a max_level less than 3', async () => {
    const phase: ICreatePhaseDTO = {
      map_id: '123456',
      max_level: 2,
      title: 'Fase prática test',
      type: enType.PRACTICE,
    };

    await expect(createPhaseUseCase.execute(phase)).rejects.toEqual(
      new InvalidMaxLevelError()
    );
  });

  it('should not be able to create a theory phase with a max_level different to 1', async () => {
    const phase: ICreatePhaseDTO = {
      map_id: '123456',
      max_level: 5,
      title: 'Fase teórica test',
      type: enType.THEORY,
    };

    await expect(createPhaseUseCase.execute(phase)).rejects.toEqual(
      new InvalidMaxLevelError()
    );
  });
});
