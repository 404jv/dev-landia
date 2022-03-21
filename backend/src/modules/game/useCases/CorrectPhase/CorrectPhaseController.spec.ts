import request from 'supertest';
import { Connection } from 'typeorm';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';
import { startUserPhase } from '@test/factories/GameFactory';
import { createMap } from '@test/factories/MapFactory';
import { createPhaseAndActivities } from '@test/factories/PhaseFactory';
import { createUserAndAuthenticate } from '@test/factories/UserFactory';

let connection: Connection;
let userToken: string;
let phaseId: string;

describe('Correct Phase Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const map = await createMap();

    const phase = await createPhaseAndActivities(map.id);
    phaseId = phase.id;

    const { token, user } = await createUserAndAuthenticate();
    userToken = token;

    await startUserPhase(user.id, phaseId);
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to a user correct their phase', async () => {
    const response = await request(app)
      .put(`/game/correct/${phaseId}`)
      .set('Authorization', `Bearer ${userToken}`);

    expect(response.statusCode).toEqual(200);
    expect(response.body.xp).toBeGreaterThan(5);
    expect(response.body.coins).toBeGreaterThan(1);
  });
});
