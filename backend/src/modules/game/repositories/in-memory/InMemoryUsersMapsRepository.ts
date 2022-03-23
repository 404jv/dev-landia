import { UserMap } from '@modules/game/infra/typeorm/entities/UserMap';

import { IUsersMapsRepository } from '../IUsersMapsRepository';

class InMemoryUsersMapsRepository implements IUsersMapsRepository {
  private repository: UserMap[] = [];

  async create(user_id: string, map_id: string): Promise<void> {
    const userMap = new UserMap();

    Object.assign(userMap, {
      user_id,
      map_id,
    });

    this.repository.push(userMap);
  }

  async findByUserAndMap(user_id: string, map_id: string): Promise<UserMap> {
    const userMap = this.repository.find(
      (userMap) => userMap.map_id === map_id && userMap.user_id === user_id
    );

    return userMap;
  }

  async listByUser(user_id: string): Promise<UserMap[]> {
    return this.repository.filter((userMap) => userMap.user_id === user_id);
  }

  update(userMap: UserMap): Promise<UserMap> {
    throw new Error('Method not implemented.');
  }
}

export { InMemoryUsersMapsRepository };
