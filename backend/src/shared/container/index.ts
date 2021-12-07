import { container } from 'tsyringe';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { MapsRepository } from '@modules/game/infra/typeorm/repositories/MapsRepository';
import { PhasesRepository } from '@modules/game/infra/typeorm/repositories/PhasesRepository';
import { IMapsRepository } from '@modules/game/repositories/IMapsRepository';
import { IPhasesRepository } from '@modules/game/repositories/IPhasesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IMapsRepository>('MapsRepository', MapsRepository);

container.registerSingleton<IPhasesRepository>(
  'PhasesRepository',
  PhasesRepository
);
