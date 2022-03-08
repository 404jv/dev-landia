import { UsersMapsRepository } from '@modules/game/infra/typeorm/repositories/UsersMapsRepository';
import { UsersPhasesRepository } from '@modules/game/infra/typeorm/repositories/UsersPhasesRepository';

export async function startUserMap(
  user_id: string,
  map_id: string
): Promise<void> {
  const usersMapsRepository = new UsersMapsRepository();
  await usersMapsRepository.create(user_id, map_id);
}

export async function startUserPhase(
  user_id: string,
  phase_id: string
): Promise<void> {
  const usersPhasesRepository = new UsersPhasesRepository();
  await usersPhasesRepository.create(user_id, phase_id);
}
