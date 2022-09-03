import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import auth from '@config/auth';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

import { InvalidEmailOrPassword } from './errors/InvalidEmailOrPassword';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
    is_admin: boolean;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const { expires_in_token, secret_token } = auth;
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new InvalidEmailOrPassword();
    }

    const isValidPassword = await compare(password, user.password);

    if (isValidPassword === false) {
      throw new InvalidEmailOrPassword();
    }

    const token = sign({}, secret_token, {
      subject: user.id,
      expiresIn: expires_in_token,
    });

    return {
      token,
      user: {
        name: user.name,
        email: user.email,
        is_admin: user.is_admin,
      },
    };
  }
}

export { AuthenticateUserUseCase };
