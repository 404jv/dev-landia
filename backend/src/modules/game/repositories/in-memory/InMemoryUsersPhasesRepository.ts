import { UserPhase } from '@modules/game/infra/typeorm/entities/UserPhase';

import { IUsersPhasesRepository } from '../IUsersPhasesRepository';

class InMemoryUsersPhasesRepository implements IUsersPhasesRepository {
  private repository: UserPhase[] = [];

  async create(user_id: string, phase_id: string): Promise<UserPhase> {
    const userPhase = new UserPhase();

    Object.assign(userPhase, {
      user_id,
      phase_id,
    });

    this.repository.push(userPhase);

    return userPhase;
  }

  async findByUserAndPhase(
    user_id: string,
    phase_id: string
  ): Promise<UserPhase> {
    const userPhase = this.repository.find(
      (userPhase) =>
        userPhase.user_id === user_id && userPhase.phase_id === phase_id
    );

    return userPhase;
  }

  update(userPhase: UserPhase): Promise<UserPhase> {
    throw new Error('Method not implemented.');
  }
}

export { InMemoryUsersPhasesRepository };
