import request from 'supertest';
import { Connection } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Activity } from '@modules/activities/infra/typeorm/entities/Activity';
import { ICreatePhaseDTO } from '@modules/phases/dtos/ICreatePhaseDTO';
import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';
import { createActivity } from '@test/factories/ActivityFactory';
import { createMap } from '@test/factories/MapFactory';
import { createPhase } from '@test/factories/PhaseFactory';
import {
  createAdminAndAuthenticate,
  createUserAndAuthenticate,
} from '@test/factories/UserFactory';

let connection: Connection;
let phase: ICreatePhaseDTO;
let activity: Activity;
let adminToken: string;
let userToken: string;

describe('Add Activities to Phase', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const adminJwt = await createAdminAndAuthenticate();
    adminToken = adminJwt.token;

    const userJwt = await createUserAndAuthenticate();
    userToken = userJwt.token;

    activity = await createActivity();
    const map = await createMap();
    phase = await createPhase(map.id);
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to add activities to a phase', async () => {
    const response = await request(app)
      .post('/phases/add-activities')
      .send({
        phase_id: phase.id,
        activities_ids: [activity.id],
      })
      .set('Authorization', `Bearer ${adminToken}`);

    expect(response.statusCode).toEqual(201);
  });

  it('Should send status 404 when add activities to a non-exist phase', async () => {
    const nonExistentPhaseId = uuidV4();

    const response = await request(app)
      .post('/phases/add-activities')
      .send({
        phase_id: nonExistentPhaseId,
        activities_ids: [activity.id],
      })
      .set('Authorization', `Bearer ${adminToken}`);

    expect(response.statusCode).toEqual(404);
    expect(response.body.message).toEqual('Phase Not Found');
  });

  it('Should send status 404 with when a user not admin try to access', async () => {
    const response = await request(app)
      .post('/phases/add-activities')
      .send({
        phase_id: phase.id,
        activities_ids: [activity.id],
      })
      .set('Authorization', `Bearer ${userToken}`);

    expect(response.statusCode).toEqual(404);
    expect(response.body.message).toEqual('Page Not Found');
  });
});
