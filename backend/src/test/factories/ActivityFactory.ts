import { Activity } from '@modules/activities/infra/typeorm/entities/Activity';
import { ActivitiesRepository } from '@modules/activities/infra/typeorm/repositories/ActivitiesRepository';

import { createManyOptions } from './OptionFactory';

enum enActivityType {
  BLOCK_ACTIVITY = 'block_activity',
  QUIZ = 'quiz',
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

  const options = await createManyOptions(activity.id);

  activity.options = options;

  return activity;
}
