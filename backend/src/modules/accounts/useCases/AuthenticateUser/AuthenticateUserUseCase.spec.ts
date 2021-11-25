import { hash } from 'bcrypt';

import { InMemoryUsersRepository } from '@modules/accounts/repositories/in-memory/InMemoryUsersRepository';

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';
import { InvalidEmailOrPassword } from './errors/InvalidEmailOrPassword';

let inMemoryUsersRepository: InMemoryUsersRepository;
let authenticateUserUseCase: AuthenticateUserUseCase;

describe('Authenticate User', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      inMemoryUsersRepository
    );
  });

  it('should be able to authenticate', async () => {
    const passwordHash = await hash('12345678', 8);

    const user = await inMemoryUsersRepository.create({
      name: 'Christian Neal',
      email: 'ragweeva@bos.to',
      password: passwordHash,
      username: 'christian123',
      biography: 'test',
    });

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: '12345678',
    });

    expect(result).toHaveProperty('token');
    expect(result.user.name).toEqual(user.name);
    expect(result.user.email).toEqual(user.email);
  });

  it('should not be able to authenticate with wrong password', async () => {
    const passwordHash = await hash('12345678', 8);

    const user = await inMemoryUsersRepository.create({
      name: 'Jon Myers',
      email: 'ca@puzotud.gp',
      password: passwordHash,
      username: 'jon12345',
      biography: 'test',
    });

    await expect(
      authenticateUserUseCase.execute({
        email: user.email,
        password: 'wrongPassword',
      })
    ).rejects.toEqual(new InvalidEmailOrPassword());
  });

  it('should not be able to authenticate with wrong email', async () => {
    const passwordHash = await hash('12345678', 8);

    await inMemoryUsersRepository.create({
      name: 'Stephen McCarthy',
      email: 'zakzi@kis.sn',
      password: passwordHash,
      username: 'stephen123',
      biography: 'test',
    });

    await expect(
      authenticateUserUseCase.execute({
        email: 'wrong.email@test.com',
        password: '12345678',
      })
    ).rejects.toEqual(new InvalidEmailOrPassword());
  });
});
