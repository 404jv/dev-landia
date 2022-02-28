import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import auth from '@config/auth';
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';

interface IReturn {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

export async function createUserAndAuthenticate(): Promise<IReturn> {
  const { expires_in_token, secret_token } = auth;

  const name = 'Vera Collins';
  const email = 'moka@heg.se';
  const password = await hash('12345678', 8);
  const username = 'vera.collins_2022';
  const biography = 'user test';

  const usersRepository = new UsersRepository();

  const user = await usersRepository.create({
    name,
    email,
    password,
    username,
    biography,
  });

  const token = sign({}, secret_token, {
    subject: user.id,
    expiresIn: expires_in_token,
  });

  return {
    token,
    user: {
      name: user.name,
      email: user.email,
    },
  };
}

export async function createAdminAndAuthenticate(): Promise<IReturn> {
  const { expires_in_token, secret_token } = auth;

  const usersRepository = new UsersRepository();

  const admin = await usersRepository.create({
    name: 'adminSys',
    email: 'admin@devlandia.com.br',
    password: await hash('admin', 8),
    username: 'adminSys',
    biography: 'admin',
    is_admin: true,
  });

  const token = sign({}, secret_token, {
    subject: admin.id,
    expiresIn: expires_in_token,
  });

  return {
    token,
    user: {
      name: admin.name,
      email: admin.email,
    },
  };
}
