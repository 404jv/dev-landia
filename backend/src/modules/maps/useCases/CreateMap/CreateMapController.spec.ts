import request from 'supertest';
import { Connection } from 'typeorm';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';
import {
  createAdminAndAuthenticate,
  createUserAndAuthenticate,
} from '@test/factories/UserFactory';

let connection: Connection;

let adminToken: string;
let userToken: string;

describe('Create map controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const adminJwt = await createAdminAndAuthenticate();
    adminToken = adminJwt.token;

    const userJwt = await createUserAndAuthenticate();
    userToken = userJwt.token;
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to create map', async () => {
    const newMap = {
      title: 'Mapa 1',
      description: 'Map test',
      order: 1,
    };

    const response = await request(app)
      .post('/maps/create')
      .send(newMap)
      .set('Authorization', `Bearer ${adminToken}`);

    expect(response.statusCode).toEqual(201);
  });

  it('Should return 404 when non admin try to create map', async () => {
    const newMap = {
      title: 'Mapa 2',
      description: 'Map test',
      order: 2,
    };

    const response = await request(app)
      .post('/maps/create')
      .send(newMap)
      .set('Authorization', `Bearer ${userToken}`);

    expect(response.statusCode).toEqual(404);
    expect(response.body.message).toBe('Page Not Found');
  });
});
