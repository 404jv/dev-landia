import request from 'supertest';
import { Connection } from 'typeorm';

import { Activity } from '@modules/activities/infra/typeorm/entities/Activity';
import { OptionsRepository } from '@modules/activities/infra/typeorm/repositories/OptionsRepository';
import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';
import { createActivity } from '@test/factories/ActivityFactory';
import { createAdminAndAuthenticate } from '@test/factories/UserFactory';

let connection: Connection;
let adminToken: string;
let activity: Activity;

enum enOptionType {
  JS_FUNCTION = 'js_function',
  COMMAND = 'command',
}

describe('Add Options to Activity', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const adminJwt = await createAdminAndAuthenticate();
    adminToken = adminJwt.token;

    activity = await createActivity();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to add default code and answer to activity', async () => {
    const optionsRepository = new OptionsRepository();

    const { id: optionId1 } = await optionsRepository.create({
      name: 'Option 1',
      hexadecimal_color: '#A6A8FC',
      type: enOptionType.JS_FUNCTION,
      activity_id: activity.id,
    });

    const { id: optionId2 } = await optionsRepository.create({
      name: 'Option 2',
      hexadecimal_color: '#2288C2',
      type: enOptionType.JS_FUNCTION,
      activity_id: activity.id,
    });

    const { id: optionId3 } = await optionsRepository.create({
      name: 'Option 3',
      hexadecimal_color: '#AC0C11',
      type: enOptionType.JS_FUNCTION,
      activity_id: activity.id,
    });

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
});
