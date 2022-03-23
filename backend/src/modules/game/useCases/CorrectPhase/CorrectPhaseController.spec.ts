import request from 'supertest';
import { Connection } from 'typeorm';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';
import {
  startUserPhase,
  startUserPhaseAtLevel2,
  startUserMap,
} from '@test/factories/GameFactory';
import { createMap } from '@test/factories/MapFactory';
import { createPhaseAndActivities } from '@test/factories/PhaseFactory';
import { createUserAndAuthenticate } from '@test/factories/UserFactory';

let connection: Connection;
let userToken: string;
let phase1Id: string;
let phase2Id: string;
let map1Id: string;
let map2Id: string;

describe('Correct Phase Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const map1 = await createMap();
    map1Id = map1.id;

    const phase1 = await createPhaseAndActivities(map1Id);
    phase1Id = phase1.id;

    const map2 = await createMap();
    map2Id = map2.id;

    const phase2 = await createPhaseAndActivities(map2Id);
    phase2Id = phase2.id;

    const { token, user } = await createUserAndAuthenticate();
    userToken = token;

    await startUserMap(user.id, map1Id);
    await startUserMap(user.id, map2Id);

    await startUserPhase(user.id, phase1Id);
    await startUserPhaseAtLevel2(user.id, phase2Id);
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to a user correct their phase', async () => {
    const response = await request(app)
      .put(`/game/correct/${phase1Id}`)
      .send({ map_id: map1Id })
      .set('Authorization', `Bearer ${userToken}`);

    expect(response.statusCode).toEqual(200);
    expect(response.body.total_xp).toBeGreaterThanOrEqual(5);
    expect(response.body.total_coins).toBeGreaterThanOrEqual(1);
    expect(response.body.current_level).toBeGreaterThanOrEqual(1);
    expect(response.body.is_map_done).toBeFalsy();
  });

  it('Should be able to a user finish their map', async () => {
    const response = await request(app)
      .put(`/game/correct/${phase2Id}`)
      .send({ map_id: map2Id })
      .set('Authorization', `Bearer ${userToken}`);

    console.log(response.body);

    expect(response.statusCode).toEqual(200);
    expect(response.body.total_xp).toBeGreaterThanOrEqual(5);
    expect(response.body.total_coins).toBeGreaterThanOrEqual(1);
    expect(response.body.current_level).toBeGreaterThanOrEqual(1);
    expect(response.body.is_map_done).toBeTruthy();
  });
});
