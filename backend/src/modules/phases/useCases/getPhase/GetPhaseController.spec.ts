import request from 'supertest';
import { Connection } from 'typeorm';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';
import { createMap } from '@test/factories/MapFactory';
import {
  createPhaseAndActivities,
  createTheoryPhase,
} from '@test/factories/PhaseFactory';
import { createUserAndAuthenticate } from '@test/factories/UserFactory';

let connection: Connection;
let practicePhaseId: string;
let theoryPhaseId: string;
let userToken: string;

describe('Get Phase Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const map = await createMap();

    const practicePhase = await createPhaseAndActivities(map.id);
    practicePhaseId = practicePhase.id;

    const theoryPhase = await createTheoryPhase(map.id);
    theoryPhaseId = theoryPhase.id;

    console.log(theoryPhaseId);

    const userJwt = await createUserAndAuthenticate();
    userToken = userJwt.token;
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to a user get their phase', async () => {
    const response = await request(app)
      .get('/game/get-phase')
      .send({
        practicePhaseId,
        phaseLevel: 0,
      })
      .set('Authorization', `Bearer ${userToken}`);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveLength(5);
    expect(response.body[0]).toHaveProperty('default_code');
    expect(response.body[0]).toHaveProperty('activity_answer');
    expect(response.body[0]).toHaveProperty('tips');
    expect(response.body[0]).toHaveProperty('options');
  });

  it('Should be able to a user get their theory phase', async () => {
    const response = await request(app)
      .get('/game/get-phase')
      .send({
        theoryPhaseId,
        phaseLevel: 0,
      })
      .set('Authorization', `Bearer ${userToken}`);

    expect(response.statusCode).toEqual(200);
  });
});
