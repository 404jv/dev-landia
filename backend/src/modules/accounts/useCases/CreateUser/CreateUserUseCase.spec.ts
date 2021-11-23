import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { InMemoryUsersRepository } from '@modules/accounts/repositories/in-memory/InMemoryUsersRepository';

import { CreateUserUseCase } from './CreateUserUseCase';
import { EmailAlreadyExistsError } from './errors/EmailAlreadyExistsError';
import { UsernameAlreadyExistsError } from './errors/UsernameAlreadyExistsError';

let inMemoryUsersRepository: InMemoryUsersRepository;
let createUserUseCase: CreateUserUseCase;

describe('Create User', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
  });

  it('should be able to create an account', async () => {
    const result = await createUserUseCase.execute({
      name: 'Alvin Becker',
      email: 'velos@tatanbun.ni',
      password: '12345678',
      username: 'alvin',
      biography: 'test',
    });

    expect(result).toHaveProperty('id');
    expect(result.is_admin).toBe(false);
    expect(result.total_coins).toBeGreaterThanOrEqual(0);
    expect(result.total_xp).toBeGreaterThanOrEqual(0);
    expect(result.username).toBe('alvin');
    expect(result.email).toBe('velos@tatanbun.ni');
    expect(result.name).toBe('Alvin Becker');
  });

  it('should not be able to create an account with an duplicated email', async () => {
    const user: ICreateUserDTO = {
      name: 'Corey Boone',
      email: 'same_email@test.com',
      password: '123456',
      username: 'corey',
      biography: 'test',
    };

    await createUserUseCase.execute(user);

    await expect(
      createUserUseCase.execute({
        name: 'Lydia Nash',
        email: 'same_email@test.com',
        password: '123456',
        username: 'lydia',
        biography: 'test1',
      })
    ).rejects.toEqual(new EmailAlreadyExistsError('same_email@test.com'));
  });

  it('should not be able to create an account with an duplicated username', async () => {
    const user: ICreateUserDTO = {
      name: 'Nathaniel Alexander',
      email: 'covon@gebar.dm',
      password: '123456',
      username: 'same_username',
      biography: 'test',
    };

    await createUserUseCase.execute(user);

    await expect(
      createUserUseCase.execute({
        name: 'Alma Barnett',
        email: 'emegoek@fu.ss',
        password: '123456',
        username: 'same_username',
        biography: 'test1',
      })
    ).rejects.toEqual(new UsernameAlreadyExistsError('same_username'));
  });
});
