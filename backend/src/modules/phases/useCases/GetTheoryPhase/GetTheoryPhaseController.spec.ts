import request from 'supertest';

import { app } from '@shared/infra/http/app';
import { postgresDatabaseSource } from '@shared/infra/typeorm';
import { startUserPhase } from '@test/factories/GameFactory';
import { createMap } from '@test/factories/MapFactory';
import { createTheoryPhase } from '@test/factories/PhaseFactory';
import { createUserAndAuthenticate } from '@test/factories/UserFactory';

let phaseId: string;
let userToken: string;

describe('Get Theory Phase Controller', () => {
  beforeAll(async () => {
    await postgresDatabaseSource.initialize();
    await postgresDatabaseSource.runMigrations();

    const map = await createMap();

    const phase = await createTheoryPhase(map.id);
    phaseId = phase.id;

    const { token, user } = await createUserAndAuthenticate();
    userToken = token;

    await startUserPhase(user.id, phase.id);
  });

  afterAll(async () => {
    await postgresDatabaseSource.dropDatabase();
    await postgresDatabaseSource.destroy();
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
