import { inject, injectable } from 'tsyringe';

import { IUsersMapsRepository } from '@modules/game/repositories/IUsersMapsRepository';
import { IUsersPhasesRepository } from '@modules/game/repositories/IUsersPhasesRepository';
import { Map } from '@modules/maps/infra/typeorm/entities/Map';
import { IMapsRepository } from '@modules/maps/repositories/IMapsRepository';
import { Phase } from '@modules/phases/infra/typeorm/entities/Phase';

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
        const userMap = await this.usersMapsRepository.findByUserAndMap(
          user_id,
          map.id
        );

        if (!userMap) return map;

        Object.assign(map, {
          is_done: userMap.is_done,
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
        const userPhase = await this.usersPhasesRepository.findByUserAndPhase(
          user_id,
          phase.id
        );

        if (userPhase !== undefined) {
          Object.assign(phase, {
            current_level: userPhase.current_level,
          });
        }

        return phase;
      })
    );

    return phasesWithLevel;
  }
}

export { ListTreeUseCase };
