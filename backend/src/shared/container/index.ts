import { container } from 'tsyringe';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { ActivitiesRepository } from '@modules/game/infra/typeorm/repositories/ActivitiesRepository';
import { MapsRepository } from '@modules/game/infra/typeorm/repositories/MapsRepository';
import { OptionsRepository } from '@modules/game/infra/typeorm/repositories/OptionsRepository';
import { PhasesRepository } from '@modules/game/infra/typeorm/repositories/PhasesRepository';
import { UsersPhasesRepository } from '@modules/game/infra/typeorm/repositories/UsersPhasesRepository';
import { IActivitiesRepository } from '@modules/game/repositories/IActivitiesRepository';
import { IMapsRepository } from '@modules/game/repositories/IMapsRepository';
import { IOptionsRepository } from '@modules/game/repositories/IOptionsRepository';
import { IPhasesRepository } from '@modules/game/repositories/IPhasesRepository';
import { IUsersPhasesRepository } from '@modules/game/repositories/IUsersPhasesRepository';

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

container.registerSingleton<IOptionsRepository>(
  'OptionsRepository',
  OptionsRepository
);

container.registerSingleton<IUsersPhasesRepository>(
  'UsersPhases',
  UsersPhasesRepository
);
