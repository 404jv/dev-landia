import { createConnection } from 'typeorm';

import { ActivitiesRepository } from '@modules/activities/infra/typeorm/repositories/ActivitiesRepository';
import { OptionsRepository } from '@modules/activities/infra/typeorm/repositories/OptionsRepository';

enum enActivityType {
  BLOCK_ACTIVITY = 'block_activity',
  QUIZ = 'quiz',
}

enum enOptionType {
  JS_FUNCTION = 'js_function',
  COMMAND = 'command',
}

async function createOption(activity_id: string, order: number) {
  const optionsRepository = new OptionsRepository();

  await optionsRepository.create({
    activity_id,
    hexadecimal_color: '#335A6A',
    name: `Option ${order}`,
    type: enOptionType.JS_FUNCTION,
  });
}

async function createActivityAndOptions(order: number) {
  const activitiesRepository = new ActivitiesRepository();

  const activity = await activitiesRepository.create({
    title: `Activity ${order}`,
    description: 'Activity test',
    order,
    type: enActivityType.BLOCK_ACTIVITY,
    phase_id: '2895a53e-b43f-43fb-8ae8-ef7bf4da1f00',
  });

  await createOption(activity.id, 0);
  await createOption(activity.id, 1);
  await createOption(activity.id, 2);
}

async function create() {
  await createConnection();

  await createActivityAndOptions(0);
  await createActivityAndOptions(1);
  await createActivityAndOptions(2);
  await createActivityAndOptions(3);
  await createActivityAndOptions(4);
  await createActivityAndOptions(5);
}

create();
