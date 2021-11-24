import { inject, injectable } from 'tsyringe';

import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

import { EmailAlreadyExistsError } from './errors/EmailAlreadyExistsError';
import { UsernameAlreadyExistsError } from './errors/UsernameAlreadyExistsError';

interface IRequest {
  name: string;
  username: string;
  email: string;
  password: string;
  biography?: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    email,
    name,
    password,
    username,
    biography,
  }: IRequest): Promise<User> {
    const emailAlreadyRegistered = await this.usersRepository.findByEmail(
      email
    );
    if (emailAlreadyRegistered) {
      throw new EmailAlreadyExistsError(email);
    }

    const usernameAlreadyRegistered = await this.usersRepository.findByUsername(
      username
    );
    if (usernameAlreadyRegistered) {
      throw new UsernameAlreadyExistsError(username);
    }

    const user = await this.usersRepository.create({
      email,
      name,
      password,
      username,
      biography,
    });

    return user;
  }
}

export { CreateUserUseCase };
