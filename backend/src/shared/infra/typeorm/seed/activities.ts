import { createConnection } from 'typeorm';

import { ActivitiesAnswersRepository } from '@modules/activities/infra/typeorm/repositories/ActivitiesAnswersRepository';
import { ActivitiesDefaultCodeRepository } from '@modules/activities/infra/typeorm/repositories/ActivitiesDefaultCodeRepository';
import { ActivitiesRepository } from '@modules/activities/infra/typeorm/repositories/ActivitiesRepository';
import { OptionsRepository } from '@modules/activities/infra/typeorm/repositories/OptionsRepository';
import { TipsRepository } from '@modules/activities/infra/typeorm/repositories/TipsRepository';

enum enActivityType {
  BLOCK_ACTIVITY = 'block_activity',
  QUIZ = 'quiz',
}

enum enOptionType {
  JS_FUNCTION = 'js_function',
  COMMAND = 'command',
}

interface ICreateActivity {
  title: string;
  order: number;
  activity_color: string;
  optionName: string;
  option_color: string;
}

async function createTip(name: string, activity_id: string) {
  const tipsRepository = new TipsRepository();

  await tipsRepository.create(name, activity_id);
}

async function addDefaultCodeAndAnswer(
  activity_id: string,
  option1_id: string,
  option2_id: string
) {
  const defaultCodeRepository = new ActivitiesDefaultCodeRepository();
  const activitiesAnswer = new ActivitiesAnswersRepository();

  await defaultCodeRepository.create({
    activity_id,
    option_id: option1_id,
    order: 0,
  });

  await activitiesAnswer.create({
    activity_id,
    option_id: option1_id,
    order: 0,
  });

  await activitiesAnswer.create({
    activity_id,
    option_id: option2_id,
    order: 1,
  });
}

async function createActivityWithOptions({
  option_color,
  optionName,
  order,
  title,
}: ICreateActivity) {
  const activitiesRepository = new ActivitiesRepository();
  const optionsRepository = new OptionsRepository();

  const activity = await activitiesRepository.create({
    title,
    description: 'Activity test',
    order,
    type: enActivityType.BLOCK_ACTIVITY,
    phase_id: '2895a53e-b43f-43fb-8ae8-ef7bf4da1f00',
  });

  const option1 = await optionsRepository.create({
    activity_id: activity.id,
    hexadecimal_color: option_color,
    name: optionName,
    type: enOptionType.JS_FUNCTION,
  });

  const option2 = await optionsRepository.create({
    activity_id: activity.id,
    hexadecimal_color: option_color,
    name: optionName,
    type: enOptionType.JS_FUNCTION,
  });

  await addDefaultCodeAndAnswer(activity.id, option1.id, option2.id);
  await createTip(
    `Use a opção ${optionName} para desenhar um quadrado`,
    activity.id
  );
}

async function create() {
  const connection = await createConnection();

  await createActivityWithOptions({
    title: 'Atividade Vermelha',
    order: 0,
    optionName: 'drawRedBox',
    option_color: '#ff0000',
    activity_color: '#EF4135',
  });

  await createActivityWithOptions({
    title: 'Atividade Azul',
    order: 1,
    optionName: 'drawBlueBox',
    option_color: '#0000FF',
    activity_color: '#1F6FEB',
  });

  await createActivityWithOptions({
    title: 'Atividade Roxa',
    order: 2,
    optionName: 'drawPurpleBox',
    option_color: '#6A0DAD',
    activity_color: '#6518F4',
  });

  await createActivityWithOptions({
    title: 'Atividade Verde',
    order: 3,
    optionName: 'drawGreenBox',
    option_color: '#67E3BB',
    activity_color: '#67E3BB',
  });

  await createActivityWithOptions({
    title: 'Atividade Verde Escura',
    order: 4,
    optionName: 'drawDarkGreenBox',
    option_color: '#025105',
    activity_color: '#025105',
  });

  await createActivityWithOptions({
    title: 'Atividade Amarela',
    order: 5,
    optionName: 'drawYellowBox',
    option_color: '#FFFF00',
    activity_color: '#FFFF00',
  });

  await connection.close();
}

create();
