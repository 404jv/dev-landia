import request from 'supertest';

import { app } from '@shared/infra/http/app';
import { prisma } from '@shared/infra/prisma/client';

describe('Create User Controller', () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('Should be able to create an account', async () => {
    const newUser = {
      name: 'Garrett Jones',
      username: 'garrett',
      email: 'jhon@gmail.com',
      password: '643519532',
      biography: 'Test',
    };

    const response = await request(app).post('/users/create').send(newUser);

    console.log(response.body);

    expect(response.statusCode).toEqual(201);
  });

  it('Should not be able to create an account with a existent e-mail', async () => {
    const userRepeatedEmail = {
      name: 'Loretta Chavez',
      username: 'loretta',
      email: 'loretta@gmail.com',
      password: '616162095239',
      biography: 'Test',
    };

    const response = await request(app)
      .post('/users/create')
      .send(userRepeatedEmail);

    expect(response.statusCode).toEqual(400);
    expect(response.body.message).toEqual(
      `The email '${userRepeatedEmail.email}' is already registered!`
    );
  });

  it('Should not be able to create an account with a existent username', async () => {
    const userRepeatedUsername = {
      name: 'Terry Roy',
      username: 'garrett',
      email: 'zam@du.gn',
      password: '616162095239',
      biography: 'Test',
    };

    const response = await request(app)
      .post('/users/create')
      .send(userRepeatedUsername);

    expect(response.statusCode).toEqual(400);
    expect(response.body.message).toEqual(
      `The username '${userRepeatedUsername.username}' is already registered!`
    );
  });
});
