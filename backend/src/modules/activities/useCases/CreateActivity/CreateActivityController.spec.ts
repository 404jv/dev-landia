import request from 'supertest';
import { Connection } from 'typeorm';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';
import {
  createAdminAndAuthenticate,
  createUserAndAuthenticate,
} from '@test/factories/UserFactory';

let connection: Connection;
let adminToken: string;

const newActivity = {
  title: 'Activity 1',
  description: 'Activity test',
  type: 'block_activity',
  is_needed_code: false,
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

describe('Create Activity Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const adminJwt = await createAdminAndAuthenticate();
    adminToken = adminJwt.token;
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to create an activity', async () => {
    const response = await request(app)
      .post('/activities/create')
      .send(newActivity)
      .set('Authorization', `Bearer ${adminToken}`);

    expect(response.statusCode).toEqual(201);
    expect(response.body.options).toHaveLength(2);
  });

  it('Should return 404 when a non admin try to create an activity', async () => {
    const { token } = await createUserAndAuthenticate();

    const response = await request(app)
      .post('/activities/create')
      .send(newActivity)
      .set('Authorization', `Bearer ${token}`);

    expect(response.statusCode).toEqual(404);
    expect(response.body.message).toEqual('Page Not Found');
  });
});