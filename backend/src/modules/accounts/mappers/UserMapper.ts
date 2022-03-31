import { instanceToInstance } from 'class-transformer';

import { IUserResponseDTO } from '../dtos/IUserResponseDTO';
import { User } from '../infra/typeorm/entities/User';

class UserMapper {
  static toDTO({
    email,
    id,
    name,
    is_admin,
    updated_at,
    created_at,
    username,
    biography,
    total_coins,
    total_xp,
  }: User): IUserResponseDTO {
    const user = instanceToInstance({
      email,
      id,
      name,
      is_admin,
      updated_at,
      created_at,
      username,
      biography,
      total_coins,
      total_xp,
    });

    return user;
  }
}

export { UserMapper };
