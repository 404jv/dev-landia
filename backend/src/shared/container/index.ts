import { container } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { PrismaUsersRepository } from '@modules/accounts/repositories/prisma/PrismaUsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  PrismaUsersRepository
);
