import { UserMap } from '../infra/typeorm/entities/UserMap';

interface IUsersMapsRepository {
  create(user_id: string, map_id: string): Promise<void>;
  findByUserAndMap(user_id: string, map_id: string): Promise<UserMap>;
  listByUser(user_id: string): Promise<UserMap[]>;
  update(userMap: UserMap): Promise<UserMap>;
}

export { IUsersMapsRepository };
