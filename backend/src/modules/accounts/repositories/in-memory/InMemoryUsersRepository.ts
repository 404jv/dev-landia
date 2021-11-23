import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { User } from '@modules/accounts/infra/typeorm/entities/User';

import { IUsersRepository } from '../IUsersRepository';

class InMemoryUsersRepository implements IUsersRepository {
  private repository: User[] = [];

  async create({
    email,
    name,
    password,
    username,
    biography = '',
    is_admin = false,
    total_coins = 0,
    total_xp = 0,
  }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      email,
      name,
      password,
      username,
      biography,
      is_admin,
      total_coins,
      total_xp,
    });

    this.repository.push(user);
    return user;
  }
}

export { InMemoryUsersRepository };
