import { container } from 'tsyringe';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { ActivitiesRepository } from '@modules/game/infra/typeorm/repositories/ActivitiesRepository';
import { MapsRepository } from '@modules/game/infra/typeorm/repositories/MapsRepository';
import { PhasesRepository } from '@modules/game/infra/typeorm/repositories/PhasesRepository';
import { IActivitiesRepository } from '@modules/game/repositories/IActivitiesRepository';
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

container.registerSingleton<IActivitiesRepository>(
  'ActivitiesRepository',
  ActivitiesRepository
);
