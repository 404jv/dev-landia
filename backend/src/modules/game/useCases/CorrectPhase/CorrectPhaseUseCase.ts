import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { UserMap } from '@modules/game/infra/typeorm/entities/UserMap';
import { UserPhase } from '@modules/game/infra/typeorm/entities/UserPhase';
import { IUsersMapsRepository } from '@modules/game/repositories/IUsersMapsRepository';
import { IUsersPhasesRepository } from '@modules/game/repositories/IUsersPhasesRepository';
import { IMapsRepository } from '@modules/maps/repositories/IMapsRepository';
import { Phase } from '@modules/phases/infra/typeorm/entities/Phase';

import { HandleNextMapUseCase } from '../HandleNextMap/HandleNextMapUseCase';

interface IRequest {
  user_id: string;
  phase_id: string;
  map_id: string;
}

interface IResponse {
  total_coins: number;
  total_xp: number;
  current_level: number;
  is_map_done: boolean;
}

@injectable()
class CorrectPhaseUseCase {
  constructor(
    @inject('UsersPhasesRepository')
    private usersPhasesRepository: IUsersPhasesRepository,
    @inject('MapsRepository')
    private mapsRepository: IMapsRepository,
    @inject('HandleNextMapUseCase')
    private handleNextMapUseCase: HandleNextMapUseCase,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('UsersMapsRepository')
    private usersMapsRepository: IUsersMapsRepository
  ) {}

  async execute({ map_id, phase_id, user_id }: IRequest): Promise<IResponse> {
    const map = await this.mapsRepository.findWithUserLevel(map_id);

    const { phases } = map;

    const userPhaseLevel = await this.usersPhasesRepository.findByUserAndPhase(
      user_id,
      phase_id
    );

    const currentPlayingPhase = phases.find((phase) => phase.id === phase_id);

    if (userPhaseLevel.current_level < currentPlayingPhase.max_level) {
      const newPhaseLevel = await this.updatePhaseLevel(userPhaseLevel);

      currentPlayingPhase.userPhase = newPhaseLevel;
    }

    const isMapDone = await this.isAllPhasesDone(phases);

    if (isMapDone) {
      const { userMap } = map;
      await this.setUserMapAsDone(userMap);
      await this.startNewUserMap(user_id, map.order);
    }

    const [total_coins, total_xp] = await this.giveUserReward(user_id);
    const { current_level } = currentPlayingPhase.userPhase;

    return {
      current_level,
      total_coins,
      total_xp,
      is_map_done: isMapDone,
    };
  }

  async updatePhaseLevel(userLevel: UserPhase): Promise<UserPhase> {
    userLevel.current_level += 1;

    const newPhaseLevel = await this.usersPhasesRepository.update(userLevel);

    return newPhaseLevel;
  }

  async isAllPhasesDone(phases: Phase[]): Promise<boolean> {
    const isAllPhasesDone = phases.every((phase) => {
      const { userPhase } = phase;

      if (userPhase.current_level >= phase.max_level) {
        return true;
      }

      return false;
    });

    return isAllPhasesDone;
  }

  async giveUserReward(user_id: string): Promise<number[]> {
    const user = await this.usersRepository.findById(user_id);

    user.total_coins += 1;
    user.total_xp += 5;

    await this.usersRepository.update(user);

    return [user.total_coins, user.total_xp];
  }

  async setUserMapAsDone(userMap: UserMap): Promise<void> {
    userMap.is_done = true;
    await this.usersMapsRepository.update(userMap);
  }

  async startNewUserMap(
    user_id: string,
    finishedMapOrder: number
  ): Promise<void> {
    await this.handleNextMapUseCase.execute({
      user_id,
      finishedMapOrder,
    });
  }
}

export { CorrectPhaseUseCase };
