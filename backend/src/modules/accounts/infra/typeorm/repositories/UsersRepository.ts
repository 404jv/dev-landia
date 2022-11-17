import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private repositories: Repository<User>;

  constructor() {
    this.repositories = getRepository(User);
  }

  async create(data: ICreateUserDTO): Promise<User> {
    const user = this.repositories.create(data);
    await this.repositories.save(user);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repositories.findOne({ where: { email } });
    return user;
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.repositories.findOne({ where: { username } });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repositories.findOne({ where: { id } });
    return user;
  }

  async update(data: ICreateUserDTO): Promise<User> {
    const user = await this.repositories.save(data);
    return user;
  }
}

export { UsersRepository };
