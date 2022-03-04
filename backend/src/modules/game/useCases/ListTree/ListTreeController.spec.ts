import request from 'supertest';
import { Connection } from 'typeorm';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';
import { createMap } from '@test/factories/MapFactory';
import { createPhase } from '@test/factories/PhaseFactory';
import { createUserAndAuthenticate } from '@test/factories/UserFactory';

let connection: Connection;

let userToken: string;

describe('List Tree Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const userJwt = await createUserAndAuthenticate();

    const map1 = await createMap();
    await createPhase(map1.id);

    const map2 = await createMap();
    await createPhase(map2.id);

    userToken = userJwt.token;
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to a user list their tree', async () => {
    const response = await request(app)
      .get('/game/tree')
      .set('Authorization', `Bearer ${userToken}`);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveLength(2);
    expect(response.body[0].phases).toHaveLength(1);
    expect(response.body[0].order).toEqual(1);
  });
});
