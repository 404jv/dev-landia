import { Repository, getRepository } from 'typeorm';

import { IUsersPhasesRepository } from '@modules/game/repositories/IUsersPhasesRepository';

import { UserPhase } from '../entities/UserPhase';

class UsersPhasesRepository implements IUsersPhasesRepository {
  private repository: Repository<UserPhase>;

  constructor() {
    this.repository = getRepository(UserPhase);
  }

  async create(user_id: string, phase_id: string): Promise<UserPhase> {
    const userPhase = this.repository.create({
      user_id,
      phase_id,
    });

    await this.repository.save(userPhase);

    return userPhase;
  }

  async findByUserAndPhase(
    user_id: string,
    phase_id: string
  ): Promise<UserPhase> {
    const userPhase = await this.repository.findOne({
      where: {
        user_id,
        phase_id,
      },
    });

    return userPhase;
  }

  async update(data: UserPhase): Promise<UserPhase> {
    const userPhase = await this.repository.save(data);
    return userPhase;
  }
}

export { UsersPhasesRepository };
