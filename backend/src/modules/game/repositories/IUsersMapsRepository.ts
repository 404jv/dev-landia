import { UserMap } from '../infra/typeorm/entities/UserMap';

interface IUsersMapsRepository {
  create(user_id: string, map_id: string): Promise<void>;
  findByUserAndMap(user_id: string, map_id: string): Promise<UserMap>;
}

export { IUsersMapsRepository };
