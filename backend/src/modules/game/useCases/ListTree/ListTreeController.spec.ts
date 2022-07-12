import request from 'supertest';

import { app } from '@shared/infra/http/app';
import { postgresDatabaseSource } from '@shared/infra/typeorm';
import { startUserMap, startUserPhase } from '@test/factories/GameFactory';
import { createMap } from '@test/factories/MapFactory';
import { createPhase } from '@test/factories/PhaseFactory';
import { createUserAndAuthenticate } from '@test/factories/UserFactory';

let userToken: string;

describe('List Tree Controller', () => {
  beforeAll(async () => {
    await postgresDatabaseSource.initialize();
    await postgresDatabaseSource.runMigrations();

    const userJwt = await createUserAndAuthenticate();
    userToken = userJwt.token;

    const map1 = await createMap();
    const phase = await createPhase(map1.id);

    const map2 = await createMap();
    await createPhase(map2.id);

    await startUserMap(userJwt.user.id, map1.id);
    await startUserPhase(userJwt.user.id, phase.id);
  });

  afterAll(async () => {
    await postgresDatabaseSource.dropDatabase();
    await postgresDatabaseSource.destroy();
  });

  it('Should be able to a user list their tree', async () => {
    const response = await request(app)
      .get('/game/tree')
      .set('Authorization', `Bearer ${userToken}`);

    const responseBody = response.body;

    expect(response.statusCode).toEqual(200);
    expect(responseBody).toHaveLength(2);
    expect(responseBody[0].order).toEqual(1);
    expect(responseBody[0].phases[0].current_level).toEqual(0);
    expect(responseBody.is_done).toBeFalsy();
  });
});
