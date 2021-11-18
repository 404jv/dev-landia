import { v4 as uuidV4 } from 'uuid';

import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { prisma } from '@shared/infra/prisma/client';

class PrismaUsersRepository implements IUsersRepository {
  async create({
    name,
    email,
    username,
    password,
    biography,
  }: ICreateUserDTO): Promise<void> {
    const user = await prisma.user.create({
      data: {
        id: uuidV4(),
        name,
        email,
        username,
        password,
        biography,
      },
    });

    console.log(`✅ User ${user.name} created!`);
  }
}

export { PrismaUsersRepository };
