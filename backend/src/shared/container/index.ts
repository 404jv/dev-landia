import { container } from 'tsyringe';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { ActivitiesAnswersRepository } from '@modules/activities/infra/typeorm/repositories/ActivitiesAnswersRepository';
import { ActivitiesDefaultCodeRepository } from '@modules/activities/infra/typeorm/repositories/ActivitiesDefaultCodeRepository';
import { ActivitiesRepository } from '@modules/activities/infra/typeorm/repositories/ActivitiesRepository';
import { OptionsRepository } from '@modules/activities/infra/typeorm/repositories/OptionsRepository';
import { IActivitiesOptionsRepository } from '@modules/activities/repositories/IActivitiesOptionsRepository';
import { IActivitiesRepository } from '@modules/activities/repositories/IActivitiesRepository';
import { IOptionsRepository } from '@modules/activities/repositories/IOptionsRepository';
import { UsersMapsRepository } from '@modules/game/infra/typeorm/repositories/UsersMapsRepository';
import { UsersPhasesRepository } from '@modules/game/infra/typeorm/repositories/UsersPhasesRepository';
import { IUsersMapsRepository } from '@modules/game/repositories/IUsersMapsRepository';
import { IUsersPhasesRepository } from '@modules/game/repositories/IUsersPhasesRepository';
import { HandleNextMapUseCase } from '@modules/game/useCases/HandleNextMap/HandleNextMapUseCase';
import { MapsRepository } from '@modules/maps/infra/typeorm/repositories/MapsRepository';
import { IMapsRepository } from '@modules/maps/repositories/IMapsRepository';
import { PhasesRepository } from '@modules/phases/infra/typeorm/repositories/PhasesRepository';
import { IPhasesRepository } from '@modules/phases/repositories/IPhasesRepository';

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
  'UsersPhasesRepository',
  UsersPhasesRepository
);

container.registerSingleton<IUsersMapsRepository>(
  'UsersMapsRepository',
  UsersMapsRepository
);

container.registerSingleton<HandleNextMapUseCase>(
  'HandleNextMapUseCase',
  HandleNextMapUseCase
);

container.registerSingleton<IActivitiesOptionsRepository>(
  'ActivitiesAnswersRepository',
  ActivitiesAnswersRepository
);

container.registerSingleton<IActivitiesOptionsRepository>(
  'ActivitiesDefaultCodeRepository',
  ActivitiesDefaultCodeRepository
);
