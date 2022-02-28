import { Activity } from '@modules/activities/infra/typeorm/entities/Activity';
import { ActivitiesRepository } from '@modules/activities/infra/typeorm/repositories/ActivitiesRepository';

enum enActivityType {
  BLOCK_ACTIVITY = 'block_activity',
  QUIZ = 'quiz',
}

export async function createActivity(): Promise<Activity> {
  const activitiesRepository = new ActivitiesRepository();

  const activity = await activitiesRepository.create({
    title: 'Activity 1',
    description: 'Activity test',
    order: 1,
    type: enActivityType.BLOCK_ACTIVITY,
  });

  return activity;
}
