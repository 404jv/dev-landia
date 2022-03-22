import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { UserPhase } from '@modules/game/infra/typeorm/entities/UserPhase';
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
    private usersMapsRepository: IMapsRepository
  ) {}

  async execute({ map_id, phase_id, user_id }: IRequest): Promise<IResponse> {
    const map = await this.mapsRepository.findWithUserLevel(map_id);

    const { phases } = map;

    const userPhaseLevel = await this.usersPhasesRepository.findByUserAndPhase(
      user_id,
      phase_id
    );

    const currentPlayingPhase = phases.find((phase) => phase.id === phase_id);

    const newUserLevel = await this.updateUserLevel(
      currentPlayingPhase,
      userPhaseLevel
    );

    const isMapDone = await this.isAllPhasesDone(phases);

    if (isMapDone) {
      const { userMap } = map;

      userMap.is_done = true;

      this.handleNextMapUseCase.execute({
        user_id,
        finishedMapOrder: map.order,
      });
    }

    const [total_coins, total_xp] = await this.giveUserReward(user_id);

    return {
      current_level: newUserLevel.current_level,
      total_coins,
      total_xp,
    };
  }

  async updateUserLevel(
    phase: Phase,
    userLevel: UserPhase
  ): Promise<UserPhase> {
    if (userLevel.current_level < phase.max_level) {
      userLevel.current_level += 1;

      const newUserLevel = await this.usersPhasesRepository.update(userLevel);

      return newUserLevel;
    }

    return undefined;
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
}

export { CorrectPhaseUseCase };
