import request from 'supertest';
import { Connection } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Activity } from '@modules/activities/infra/typeorm/entities/Activity';
import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';
import { createActivity } from '@test/factories/ActivityFactory';
import { createAdminAndAuthenticate } from '@test/factories/UserFactory';

let connection: Connection;
let adminToken: string;
let activity: Activity;
let optionId1: string;
let optionId2: string;
let optionId3: string;

describe('Add Options to Activity', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const adminJwt = await createAdminAndAuthenticate();
    adminToken = adminJwt.token;

    activity = await createActivity();
    optionId1 = activity.options[0].id;
    optionId2 = activity.options[1].id;
    optionId3 = activity.options[2].id;
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
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
});
