import { Activity } from '@modules/activities/infra/typeorm/entities/Activity';
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

export async function createActivity(phase_id: string): Promise<Activity> {
  const activitiesRepository = new ActivitiesRepository();

  const activity = await activitiesRepository.create({
    title: 'Activity 1',
    description: 'Activity test',
    order: 1,
    type: enActivityType.BLOCK_ACTIVITY,
    phase_id,
  });

  const optionsRepository = new OptionsRepository();

  const option1 = await optionsRepository.create({
    name: 'Option 1',
    hexadecimal_color: '#A6A8FC',
    type: enOptionType.JS_FUNCTION,
    activity_id: activity.id,
  });

  const option2 = await optionsRepository.create({
    name: 'Option 2',
    hexadecimal_color: '#2288C2',
    type: enOptionType.JS_FUNCTION,
    activity_id: activity.id,
  });

  const option3 = await optionsRepository.create({
    name: 'Option 3',
    hexadecimal_color: '#AC0C11',
    type: enOptionType.JS_FUNCTION,
    activity_id: activity.id,
  });

  activity.options = [option1, option2, option3];

  return activity;
}
