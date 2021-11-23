import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

interface IRequest {
  name: string;
  username: string;
  email: string;
  password: string;
  biography?: string;
}

@injectable()
class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(): Promise<void> {
    await this.usersRepository.create({
      name: 'Jão',
      email: 'joao@gmail.com',
      password: '123',
      username: '404jv',
      biography: 'Tô voando alto',
    });
  }
}

export { CreateUserUseCase };
