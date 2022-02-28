import request from 'supertest';
import { Connection } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Activity } from '@modules/activities/infra/typeorm/entities/Activity';
import { ActivitiesRepository } from '@modules/activities/infra/typeorm/repositories/ActivitiesRepository';
import { MapsRepository } from '@modules/maps/infra/typeorm/repositories/MapsRepository';
import { ICreatePhaseDTO } from '@modules/phases/dtos/ICreatePhaseDTO';
import { PhasesRepository } from '@modules/phases/infra/typeorm/repositories/PhasesRepository';
import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';
import {
  createAdminAndAuthenticate,
  createUserAndAuthenticate,
} from '@test/factories/UserFactory';

let connection: Connection;
let phase: ICreatePhaseDTO;
let activity: Activity;
let adminToken: string;
let userToken: string;

enum enActivityType {
  BLOCK_ACTIVITY = 'block_activity',
  QUIZ = 'quiz',
}

enum enType {
  THEORY = 'theory',
  PRACTICE = 'practice',
}

describe('Add Activities to Phase', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const adminJwt = await createAdminAndAuthenticate();
    adminToken = adminJwt.token;

    const userJwt = await createUserAndAuthenticate();
    userToken = userJwt.token;

    const activitiesRepository = new ActivitiesRepository();
    activity = await activitiesRepository.create({
      title: 'Activity Test',
      description: 'test',
      order: 1,
      type: enActivityType.BLOCK_ACTIVITY,
    });

    const mapsRepository = new MapsRepository();
    const map = await mapsRepository.create({
      description: 'Map Test',
      title: 'Map test',
      order: 1,
    });

    const phasesRepository = new PhasesRepository();
    phase = await phasesRepository.create({
      title: 'Phase Test',
      map_id: map.id,
      max_level: 3,
      order: 1,
      type: enType.PRACTICE,
    });
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
