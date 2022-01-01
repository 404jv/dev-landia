import { InMemoryUsersRepository } from '@modules/accounts/repositories/in-memory/InMemoryUsersRepository';
import { InMemoryMapsRepository } from '@modules/game/repositories/in-memory/InMemoryMapsRepository';
import { InMemoryUsersMapsRepository } from '@modules/game/repositories/in-memory/InMemoryUsersMapsRepository';
import { InMemoryUsersPhasesRepository } from '@modules/game/repositories/in-memory/InMemoryUsersPhasesRepository';

import { ListTreeUseCase } from './ListTreeUseCase';

let listTreeUseCase: ListTreeUseCase;
let inMemoryMapsRepository: InMemoryMapsRepository;
let inMemoryUsersPhasesRepository: InMemoryUsersPhasesRepository;
let inMemoryUsersMapsRepository: InMemoryUsersMapsRepository;
let inMemoryUsersRepository: InMemoryUsersRepository;

describe('List Tree', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    inMemoryMapsRepository = new InMemoryMapsRepository();
    inMemoryUsersPhasesRepository = new InMemoryUsersPhasesRepository();
    inMemoryUsersMapsRepository = new InMemoryUsersMapsRepository();
    listTreeUseCase = new ListTreeUseCase(
      inMemoryMapsRepository,
      inMemoryUsersPhasesRepository,
      inMemoryUsersMapsRepository
    );
  });

  it('should be able to list the tree', async () => {
    const user = await inMemoryUsersRepository.create({
      name: 'Barbara Garrett',
      email: 'jam@rajhe.cv',
      password: '1234567',
      username: 'barbara',
    });

    const result = await listTreeUseCase.execute(user.id);
    console.log(result);

    expect(result.length).toBeGreaterThanOrEqual(0);
    expect(result[0]).toHaveProperty('is_done');
    expect(result[0]).toHaveProperty('phases');
    expect(result[0].phases[0]).toHaveProperty('current_level');
  });
});
