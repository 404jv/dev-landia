import { getRepository, Repository } from 'typeorm';

import { IUsersMapsRepository } from '@modules/game/repositories/IUsersMapsRepository';

import { UserMap } from '../entities/UserMap';

class UsersMapsRepository implements IUsersMapsRepository {
  private repository: Repository<UserMap>;

  constructor() {
    this.repository = getRepository(UserMap);
  }

  async create(user_id: string, map_id: string): Promise<void> {
    const userMap = this.repository.create({
      user_id,
      map_id,
    });

    await this.repository.save(userMap);
  }

  async findByUserAndMap(user_id: string, map_id: string): Promise<UserMap> {
    const userMap = await this.repository.findOne({
      where: {
        user_id,
        map_id,
      },
    });

    return userMap;
  }

  async listByUser(user_id: string): Promise<UserMap[]> {
    const userMaps = await this.repository.find({
      where: {
        user_id,
      },
    });

    return userMaps;
  }

  async update(userMap: UserMap): Promise<UserMap> {
    await this.repository.save(userMap);
    return userMap;
  }
}

export { UsersMapsRepository };
