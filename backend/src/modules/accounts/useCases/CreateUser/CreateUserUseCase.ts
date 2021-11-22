import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(): void {
    this.usersRepository.create({
      name: 'Jão',
      email: 'joao@gmail.com',
      password: '123',
      username: '404jv',
      biography: 'Tô voando alto',
    });
  }
}

export { CreateUserUseCase };
