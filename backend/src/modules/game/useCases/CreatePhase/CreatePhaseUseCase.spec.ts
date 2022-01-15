import { ICreatePhaseDTO } from '@modules/game/dtos/ICreatePhaseDTO';
import { InMemoryMapsRepository } from '@modules/game/repositories/in-memory/InMemoryMapsRepository';
import { InMemoryPhasesRepository } from '@modules/game/repositories/in-memory/InMemoryPhasesRepository';

import { CreatePhaseUseCase } from './CreatePhaseUseCase';
import { InvalidMaxLevelError } from './errors/InvalidMaxLevelError';
import { MapNotFoundError } from './errors/MapNotFoundError';

let inMemoryPhasesRepository: InMemoryPhasesRepository;
let inMemoryMapsRepository: InMemoryMapsRepository;
let createPhaseUseCase: CreatePhaseUseCase;

enum enType {
  THEORY = 'theory',
  PRACTICE = 'practice',
}

describe('Create Phase', () => {
  beforeEach(() => {
    inMemoryPhasesRepository = new InMemoryPhasesRepository();
    inMemoryMapsRepository = new InMemoryMapsRepository();
    createPhaseUseCase = new CreatePhaseUseCase(
      inMemoryPhasesRepository,
      inMemoryMapsRepository
    );
  });

  it('should be able to create a practice phase', async () => {
    const map = await inMemoryMapsRepository.create({
      title: 'Title test',
      description: 'Description Test',
      order: 1,
    });

    const phase: ICreatePhaseDTO = {
      map_id: map.id,
      max_level: 3,
      title: 'Fase prática test',
      type: enType.PRACTICE,
      order: 1,
    };

    const result = await createPhaseUseCase.execute(phase);

    expect(result).toHaveProperty('id');
    expect(result.max_level).toEqual(phase.max_level);
    expect(result.title).toEqual(phase.title);
    expect(result.type).toEqual(enType.PRACTICE);
    expect(result.markdown_text).toBeFalsy();
  });

  it('should be able to create a theory phase', async () => {
    const map = await inMemoryMapsRepository.create({
      title: 'Title test',
      description: 'Description Test',
      order: 1,
    });

    const phase: ICreatePhaseDTO = {
      map_id: map.id,
      max_level: 1,
      title: 'Fase teórica fase',
      type: enType.THEORY,
      markdown_text: '## oi',
      order: 1,
    };

    const result = await createPhaseUseCase.execute(phase);

    expect(result).toHaveProperty('id');
    expect(result.max_level).toEqual(1);
    expect(result.title).toEqual(phase.title);
    expect(result.type).toEqual(enType.THEORY);
    expect(result.markdown_text).toEqual(phase.markdown_text);
  });

  it('should not be able to create a practice phase with a max_level less than 3', async () => {
    const map = await inMemoryMapsRepository.create({
      title: 'Title test',
      description: 'Description Test',
      order: 1,
    });

    const phase: ICreatePhaseDTO = {
      map_id: map.id,
      max_level: 2,
      title: 'Fase prática test',
      type: enType.PRACTICE,
      order: 1,
    };

    await expect(createPhaseUseCase.execute(phase)).rejects.toEqual(
      new InvalidMaxLevelError()
    );
  });

  it('should not be able to create a theory phase with a max_level different to 1', async () => {
    const map = await inMemoryMapsRepository.create({
      title: 'Title test',
      description: 'Description Test',
      order: 1,
    });

    const phase: ICreatePhaseDTO = {
      map_id: map.id,
      max_level: 5,
      title: 'Fase teórica test',
      type: enType.THEORY,
      order: 1,
    };

    await expect(createPhaseUseCase.execute(phase)).rejects.toEqual(
      new InvalidMaxLevelError()
    );
  });

  it('should not be able to create a phase with a non-existent map', async () => {
    const inCorrectPhase: ICreatePhaseDTO = {
      map_id: 'non-existent-id',
      max_level: 5,
      title: 'Fase test',
      type: enType.PRACTICE,
      order: 1,
    };

    await expect(createPhaseUseCase.execute(inCorrectPhase)).rejects.toEqual(
      new MapNotFoundError()
    );
  });
});
