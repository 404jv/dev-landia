import { inject, injectable } from 'tsyringe';

import { IUserResponseDTO } from '@modules/accounts/dtos/IUserResponseDTO';
import { UserMapper } from '@modules/accounts/mappers/UserMapper';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

import { UserNotFound } from './errors/UserNotFound';

@injectable()
class GetUserProfileUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<IUserResponseDTO> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new UserNotFound();
    }

    return UserMapper.toDTO(user);
  }
}

export { GetUserProfileUseCase };
