import request from 'supertest';
import { Connection } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';
import { createMap } from '@test/factories/MapFactory';
import {
  createAdminAndAuthenticate,
  createUserAndAuthenticate,
} from '@test/factories/UserFactory';

let map_id: string;
let adminToken: string;
let userToken: string;

let connection: Connection;
describe('Create Phase Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const map = await createMap();
    map_id = map.id;

    const adminJwt = await createAdminAndAuthenticate();
    adminToken = adminJwt.token;

    const userJwt = await createUserAndAuthenticate();
    userToken = userJwt.token;
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to create a practice phase', async () => {
    const newPhase = {
      title: 'Fase 1',
      map_id,
      max_level: 3,
      type: 'practice',
      description: 'Descrição da fase 1',
      hexadecimal_color: '#EF4135',
      order: 1,
    };

    const response = await request(app)
      .post('/phases/create')
      .send(newPhase)
      .set('Authorization', `Bearer ${adminToken}`);

    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.hexadecimal_color).toEqual('#EF4135');
  });

  it('Should be able to create a theory phase', async () => {
    const newPhase = {
      title: 'Fase 2',
      map_id,
      max_level: 1,
      type: 'theory',
      description: 'Descrição da fase 2',
      markdown_text: '# Fase 2 test',
      order: 2,
    };

    const response = await request(app)
      .post('/phases/create')
      .send(newPhase)
      .set('Authorization', `Bearer ${adminToken}`);

    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty('id');
  });

  it('Should send status 400 when try to create a practice phase with max level less than 3', async () => {
    const newPhase = {
      title: 'Invalid Fase',
      map_id,
      max_level: 1,
      type: 'practice',
      description: 'Descrição da fase inválida',
      order: 3,
    };

    const response = await request(app)
      .post('/phases/create')
      .send(newPhase)
      .set('Authorization', `Bearer ${adminToken}`);

    expect(response.statusCode).toEqual(400);
    expect(response.body.message).toEqual(
      'Invalid max level to this kind of phase'
    );
  });

  it('Should send status 400 when try to create a theory phase with max level different than 1', async () => {
    const newPhase = {
      title: 'Invalid theory phase 2',
      map_id,
      max_level: 2,
      type: 'theory',
      description: 'Descrição da fase inválida',
      markdown_text: '# Invalid phase test',
      order: 4,
    };

    const response = await request(app)
      .post('/phases/create')
      .send(newPhase)
      .set('Authorization', `Bearer ${adminToken}`);

    expect(response.statusCode).toEqual(400);
    expect(response.body.message).toEqual(
      'Invalid max level to this kind of phase'
    );
  });

  it('Should send status 404 when try to create a phase with a non-existent map', async () => {
    const nonExistentMapId = uuidV4();

    const newPhase = {
      title: 'Invalid theory phase 2',
      map_id: nonExistentMapId,
      max_level: 1,
      type: 'theory',
      description: 'Descrição da fase inválida',
      markdown_text: '# Phase test',
      order: 5,
    };

    const response = await request(app)
      .post('/phases/create')
      .send(newPhase)
      .set('Authorization', `Bearer ${adminToken}`);

    expect(response.statusCode).toEqual(404);
    expect(response.body.message).toEqual('Map not found');
  });

  it('Should send status 404 when a non admin try to create a phase', async () => {
    const newPhase = {
      title: 'Fase 1',
      map_id,
      max_level: 3,
      type: 'practice',
      description: 'Descrição da fase 1',
      order: 1,
    };

    const response = await request(app)
      .post('/phases/create')
      .send(newPhase)
      .set('Authorization', `Bearer ${userToken}`);

    expect(response.statusCode).toEqual(404);
    expect(response.body.message).toEqual('Page Not Found');
  });
});
