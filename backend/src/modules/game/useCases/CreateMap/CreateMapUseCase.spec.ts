import { ICreateMapDTO } from '@modules/game/dtos/ICreateMapDTO';
import { InMemoryMapsRepository } from '@modules/game/repositories/in-memory/InMemoryMapsRepository';

import { CreateMapUseCase } from './CreateMapUseCase';

let createMapUseCase: CreateMapUseCase;
let inMemoryUsersRepository: InMemoryMapsRepository;

describe('Create Map', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryMapsRepository();
    createMapUseCase = new CreateMapUseCase(inMemoryUsersRepository);
  });

  it('should be able to create map', async () => {
    const map: ICreateMapDTO = {
      title: 'Mapa 1',
      description: 'Description test',
      order: 1,
    };

    const result = await createMapUseCase.execute(map);

    expect(result).toHaveProperty('id');
    expect(result.order).toBe(1);
    expect(result.description).toEqual(map.description);
    expect(result.title).toEqual(map.title);
  });
});
