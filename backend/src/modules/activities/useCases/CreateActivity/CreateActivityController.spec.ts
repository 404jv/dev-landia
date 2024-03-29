import request from 'supertest';
import { Connection } from 'typeorm';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';
import { createMap } from '@test/factories/MapFactory';
import { createPhase } from '@test/factories/PhaseFactory';
import {
  createAdminAndAuthenticate,
  createUserAndAuthenticate,
} from '@test/factories/UserFactory';

let connection: Connection;

let adminToken: string;
let phase_id: string;

describe('Create Activity Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const adminJwt = await createAdminAndAuthenticate();
    adminToken = adminJwt.token;

    const { id: map_id } = await createMap();

    const phase = await createPhase(map_id);
    phase_id = phase.id;
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to create an activity', async () => {
    const newActivity = {
      title: 'Activity 1',
      description: 'Activity test',
      type: 'block_activity',
      is_needed_code: false,
      phase_id,
      tips: ['Tip 1 test', 'Tip 2 test'],
      options: [
        {
          name: 'option 1',
          type: 'js_function',
          hexadecimal_color: '#AB7DE8',
          abstracted_name: 'option 1 abstracted',
        },
        {
          name: 'option 2',
          type: 'js_function',
          hexadecimal_color: '#B0169D',
        },
      ],
      order: 1,
    };

    const response = await request(app)
      .post('/activities/create')
      .send(newActivity)
      .set('Authorization', `Bearer ${adminToken}`);

    const responseBody = response.body;
    const { options } = responseBody;

    expect(response.statusCode).toEqual(201);
    expect(responseBody.options).toHaveLength(2);
    expect(responseBody.tips).toHaveLength(2);
    expect(options[0].abstracted_name).toEqual('option 1 abstracted');
    expect(options[1].abstracted_name).toEqual(options[1].name);
  });

  it('Should return 404 when a non admin try to create an activity', async () => {
    const { token } = await createUserAndAuthenticate();

    const newActivity = {
      title: 'Activity 2',
      description: 'Activity test',
      type: 'block_activity',
      is_needed_code: false,
      tips: ['Tip 1 test', 'Tip 2 test'],
      phase_id,
      options: [
        {
          name: 'option 1',
          type: 'js_function',
          hexadecimal_color: '#AB7DE8',
        },
        {
          name: 'option 2',
          type: 'js_function',
          hexadecimal_color: '#B0169D',
        },
      ],
      order: 1,
    };

    const response = await request(app)
      .post('/activities/create')
      .send(newActivity)
      .set('Authorization', `Bearer ${token}`);

    expect(response.statusCode).toEqual(404);
    expect(response.body.message).toEqual('Page Not Found');
  });
});
