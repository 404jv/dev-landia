import { inject, injectable } from 'tsyringe';

import { IUsersMapsRepository } from '@modules/game/repositories/IUsersMapsRepository';
import { IUsersPhasesRepository } from '@modules/game/repositories/IUsersPhasesRepository';
import { IMapsRepository } from '@modules/maps/repositories/IMapsRepository';

interface IRequest {
  user_id: string;
  finishedMapOrder: number;
}

@injectable()
class HandleNextMapUseCase {
  constructor(
    @inject('UsersMapsRepository')
    private usersMapsRepository: IUsersMapsRepository,
    @inject('MapsRepository')
    private mapsRepository: IMapsRepository,
    @inject('UsersPhasesRepository')
    private usersPhasesRepository: IUsersPhasesRepository
  ) {}

  async execute({ user_id, finishedMapOrder }: IRequest): Promise<void> {
    const nextMap = await this.mapsRepository.findByOrder(finishedMapOrder + 1);

    if (!nextMap) {
      return;
    }

    await this.usersMapsRepository.create(user_id, nextMap.id);

    nextMap.phases.map(async (phase) => {
      await this.usersPhasesRepository.create(user_id, phase.id);
    });
  }
}

export { HandleNextMapUseCase };
