import { inject, injectable } from 'tsyringe';

import { Map } from '@modules/game/infra/typeorm/entities/Map';
import { Phase } from '@modules/game/infra/typeorm/entities/Phase';
import { IMapsRepository } from '@modules/game/repositories/IMapsRepository';
import { IUsersMapsRepository } from '@modules/game/repositories/IUsersMapsRepository';
import { IUsersPhasesRepository } from '@modules/game/repositories/IUsersPhasesRepository';

@injectable()
class ListTreeUseCase {
  constructor(
    @inject('MapsRepository')
    private mapsRepository: IMapsRepository,
    @inject('UsersPhasesRepository')
    private usersPhasesRepository: IUsersPhasesRepository,
    @inject('UsersMapsRepository')
    private usersMapsRepository: IUsersMapsRepository
  ) {}

  async execute(user_id: string): Promise<Map[]> {
    const maps = await this.mapsRepository.list();

    const tree = await Promise.all(
      maps.map(async (map) => {
        const { is_done } = await this.usersMapsRepository.findByUserAndMap(
          user_id,
          map.id
        );

        Object.assign(map, {
          is_done,
        });

        const phasesWithLevel = await this.getPhasesLevel(map.phases, user_id);
        map.phases = phasesWithLevel;

        return map;
      })
    );

    return tree;
  }

  private async getPhasesLevel(
    phases: Phase[],
    user_id: string
  ): Promise<Phase[]> {
    const phasesWithLevel = await Promise.all(
      phases.map(async (phase) => {
        const { current_level } =
          await this.usersPhasesRepository.findByUserAndPhase(
            user_id,
            phase.id
          );

        Object.assign(phase, {
          current_level,
        });

        return phase;
      })
    );

    return phasesWithLevel;
  }
}

export { ListTreeUseCase };
