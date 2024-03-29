import { hash } from 'bcrypt';
import request from 'supertest';
import { Connection } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

let connection: Connection;

describe('Create User Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const userTest = {
      name: 'Loretta Gutierrez',
      username: 'fanny_05',
      email: 'loretta@gmail.com',
      password: 'superSecreta123',
      biography: 'User Test',
    };

    const id = uuidV4();
    const passwordHash = await hash(userTest.password, 8);

    await connection.query(`
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
    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to create an account', async () => {
    const newUser = {
      name: 'Garrett Jones',
      username: 'garrett',
      email: 'jhon@gmail.com',
      password: '643519532',
      biography: 'Test',
    };

    const response = await request(app).post('/users/create').send(newUser);

    expect(response.statusCode).toEqual(201);
  });

  it('Should not be able to create an account with a existent e-mail', async () => {
    const userRepeatedEmail = {
      name: 'Loretta Chavez',
      username: 'loretta',
      email: 'loretta@gmail.com',
      password: '616162095239',
      biography: 'Test',
    };

    const response = await request(app)
      .post('/users/create')
      .send(userRepeatedEmail);

    expect(response.statusCode).toEqual(400);
    expect(response.body.message).toEqual(
      `The email '${userRepeatedEmail.email}' is already registered!`
    );
  });

  it('Should not be able to create an account with a existent username', async () => {
    const userRepeatedUsername = {
      name: 'Terry Roy',
      username: 'garrett',
      email: 'zam@du.gn',
      password: '616162095239',
      biography: 'Test',
    };

    const response = await request(app)
      .post('/users/create')
      .send(userRepeatedUsername);

    expect(response.statusCode).toEqual(400);
    expect(response.body.message).toEqual(
      `The username '${userRepeatedUsername.username}' is already registered!`
    );
  });
});
