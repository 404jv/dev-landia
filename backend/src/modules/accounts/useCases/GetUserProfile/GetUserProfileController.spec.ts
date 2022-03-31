import { sign } from 'jsonwebtoken';
import request from 'supertest';
import { Connection } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import auth from '@config/auth';
import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';
import { createUserAndAuthenticate } from '@test/factories/UserFactory';

let connection: Connection;

let userToken: string;

describe('Create User Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const { token } = await createUserAndAuthenticate();
    userToken = token;
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('should be able to a user get their profile', async () => {
    const response = await request(app)
      .get('/users/profile')
      .set('Authorization', `Bearer ${userToken}`);

    const responseBody = response.body;

    expect(response.status).toEqual(200);
    expect(responseBody.id).toBeDefined();
    expect(responseBody.password).toBeUndefined();
    expect(responseBody.username).toBeDefined();
    expect(responseBody.email).toBeDefined();
    expect(responseBody.is_admin).toBeDefined();
    expect(responseBody.total_coins).toBeDefined();
    expect(responseBody.total_xp).toBeDefined();
  });

  it('should return 404 when try to get a non-existent user', async () => {
    const nonExistentId = uuidV4();

    const nonExistentUserToken = sign(
      { sub: nonExistentId },
      auth.secret_token
    );

    const response = await request(app)
      .get('/users/profile')
      .set('Authorization', `Bearer ${nonExistentUserToken}`);

    expect(response.status).toEqual(404);
    expect(response.body.message).toEqual('User not found');
  });
});
