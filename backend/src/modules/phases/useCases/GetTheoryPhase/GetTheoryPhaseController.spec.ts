import request from 'supertest';
import { Connection } from 'typeorm';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';
import { startUserPhase } from '@test/factories/GameFactory';
import { createMap } from '@test/factories/MapFactory';
import { createTheoryPhase } from '@test/factories/PhaseFactory';
import { createUserAndAuthenticate } from '@test/factories/UserFactory';

let connection: Connection;

let phaseId: string;
let userToken: string;

describe('Get Theory Phase Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const map = await createMap();

    const phase = await createTheoryPhase(map.id);
    phaseId = phase.id;

    const { token, user } = await createUserAndAuthenticate();
    userToken = token;

    await startUserPhase(user.id, phase.id);
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be abe to get a theory phase', async () => {
    const response = await request(app)
      .get(`/game/theory-phase/${phaseId}`)
      .set('Authorization', `Bearer ${userToken}`);

    expect(response.statusCode).toEqual(200);
    expect(response.body.title).toBeTruthy();
    expect(response.body.current_level).toEqual(0);
    expect(response.body.type).toEqual('theory');
    expect(response.body.markdown_text).toBeTruthy();
    expect(response.body.activities).toHaveLength(0);
  });

  it('Should return status 401 when a anonymous user try to get phase', async () => {
    const response = await request(app).get(`/game/theory-phase/${phaseId}`);

    expect(response.statusCode).toEqual(401);
    expect(response.body.message).toEqual('Token is missing');
  });
});
