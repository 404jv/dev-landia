import request from 'supertest';
import { v4 as uuidV4 } from 'uuid';

import { Activity } from '@modules/activities/infra/typeorm/entities/Activity';
import { app } from '@shared/infra/http/app';
import { postgresDatabaseSource } from '@shared/infra/typeorm';
import { createActivity } from '@test/factories/ActivityFactory';
import { createMap } from '@test/factories/MapFactory';
import { createPhase } from '@test/factories/PhaseFactory';
import {
  createAdminAndAuthenticate,
  createUserAndAuthenticate,
} from '@test/factories/UserFactory';

let adminToken: string;
let activity: Activity;
let optionId1: string;
let optionId2: string;
let optionId3: string;

describe('Add Options to Activity', () => {
  beforeAll(async () => {
    await postgresDatabaseSource.initialize();
    await postgresDatabaseSource.runMigrations();

    const adminJwt = await createAdminAndAuthenticate();
    adminToken = adminJwt.token;

    const { id: map_id } = await createMap();
    const { id: phase_id } = await createPhase(map_id);

    activity = await createActivity(phase_id);
    optionId1 = activity.options[0].id;
    optionId2 = activity.options[1].id;
    optionId3 = activity.options[2].id;
  });

  afterAll(async () => {
    await postgresDatabaseSource.dropDatabase();
    await postgresDatabaseSource.destroy();
  });

  it('Should be able to add default code and answer to activity', async () => {
    const response = await request(app)
      .post('/activities/add-options')
      .send({
        activityAnswerOptionsIds: [optionId1, optionId2, optionId3],
        activityDefaultCodeOptionsIds: [optionId1],
        activity_id: activity.id,
      })
      .set('Authorization', `Bearer ${adminToken}`);

    expect(response.statusCode).toEqual(204);
  });

  it('Should throws 404 when try to add options to a non-existent activity', async () => {
    const nonExistentId = uuidV4();

    const response = await request(app)
      .post('/activities/add-options')
      .send({
        activityAnswerOptionsIds: [optionId1, optionId2, optionId3],
        activityDefaultCodeOptionsIds: [optionId1],
        activity_id: nonExistentId,
      })
      .set('Authorization', `Bearer ${adminToken}`);

    expect(response.statusCode).toEqual(404);
    expect(response.body.message).toEqual('Activity Not Found');
  });

  it('Should throws 404 when a non admin try to add options to a activity', async () => {
    const { token } = await createUserAndAuthenticate();

    const response = await request(app)
      .post('/activities/add-options')
      .send({
        activityAnswerOptionsIds: [optionId1, optionId2, optionId3],
        activityDefaultCodeOptionsIds: [optionId1],
        activity_id: activity.id,
      })
      .set('Authorization', `Bearer ${token}`);

    expect(response.statusCode).toEqual(404);
    expect(response.body.message).toEqual('Page Not Found');
  });
});
