import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { User } from '@prisma/client';
import { prisma } from '@shared/infra/prisma/client';

class UsersRepository implements IUsersRepository {
  async create(data: ICreateUserDTO): Promise<User> {
    const user = await prisma.user.create({
      data,
    });

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) return null;

    return user;
  }

  async findByUsername(username: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) return null;

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) return null;

    return user;
  }

  async update(data: ICreateUserDTO): Promise<User> {
    const user = await prisma.user.update({
      data,
      where: { id: data.id },
    });

    return user;
  }
}

export { UsersRepository };
