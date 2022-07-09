import { hash } from 'bcrypt';
import request from 'supertest';
import { v4 as uuidV4 } from 'uuid';

import { app } from '@shared/infra/http/app';
import { postgresDatabaseSource } from '@shared/infra/typeorm';

describe('Create User Controller', () => {
  const userTest = {
    name: 'Fanny Gutierrez',
    username: 'fanny_05',
    email: 'nozozzab@ac.uk',
    password: 'superSecreta123',
    biography: 'User Test',
  };

  beforeAll(async () => {
    await postgresDatabaseSource.initialize();
    await postgresDatabaseSource.runMigrations();

    const id = uuidV4();
    const passwordHash = await hash(userTest.password, 8);

    await postgresDatabaseSource.query(`
      INSERT INTO
        users(id, name, username, email, is_admin, password, biography)
      VALUES (
        '${id}',
        '${userTest.name}',
        '${userTest.username}',
        '${userTest.email}',
        false,
        '${passwordHash}',
        '${userTest.biography}'
      );
    `);
  });

  afterAll(async () => {
    await postgresDatabaseSource.dropDatabase();
    await postgresDatabaseSource.destroy();
  });

  it('Should be able to authenticate', async () => {
    const response = await request(app).post('/sessions').send({
      email: userTest.email,
      password: userTest.password,
    });

    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty('token');
    expect(response.body).toHaveProperty('user');
  });

  it('Should not be able to authenticate with invalid email', async () => {
    const response = await request(app).post('/sessions').send({
      email: 'wrong.email@test.com',
      password: userTest.password,
    });

    expect(response.statusCode).toEqual(401);
    expect(response.body.message).toEqual('Invalid email or password');
  });

  it('Should not be able to authenticate with invalid password', async () => {
    const response = await request(app).post('/sessions').send({
      email: userTest.email,
      password: 'wrong_password123',
    });

    expect(response.statusCode).toEqual(401);
    expect(response.body.message).toEqual('Invalid email or password');
  });
});
