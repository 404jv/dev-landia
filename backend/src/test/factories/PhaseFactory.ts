import { ActivitiesRepository } from '@modules/activities/infra/typeorm/repositories/ActivitiesRepository';
import { Phase } from '@modules/phases/infra/typeorm/entities/Phase';
import { PhasesRepository } from '@modules/phases/infra/typeorm/repositories/PhasesRepository';

import { createManyOptions } from './OptionFactory';

enum enActivityType {
  BLOCK_ACTIVITY = 'block_activity',
  QUIZ = 'quiz',
}

enum enType {
  THEORY = 'theory',
  PRACTICE = 'practice',
}

export async function createPhase(map_id: string): Promise<Phase> {
  const phasesRepository = new PhasesRepository();

  const phase = await phasesRepository.create({
    title: 'Phase Test',
    map_id,
    max_level: 3,
    description: 'Description phase test',
    order: 1,
    type: enType.PRACTICE,
  });

  return phase;
}

export async function createPhaseAndActivities(map_id: string): Promise<Phase> {
  const phasesRepository = new PhasesRepository();

  const activitiesRepository = new ActivitiesRepository();

  const phase = await phasesRepository.create({
    title: 'Phase Test',
    map_id,
    max_level: 3,
    description: 'Description phase test',
    order: 0,
    type: enType.PRACTICE,
  });

  const activity1 = await activitiesRepository.create({
    title: 'Activity 1',
    description: 'Activity test',
    order: 0,
    type: enActivityType.BLOCK_ACTIVITY,
    phase_id: phase.id,
  });

  await createManyOptions(activity1.id);

  const activity2 = await activitiesRepository.create({
    title: 'Activity 2',
    description: 'Activity test',
    order: 1,
    type: enActivityType.BLOCK_ACTIVITY,
    phase_id: phase.id,
  });

  await createManyOptions(activity2.id);

  const activity3 = await activitiesRepository.create({
    title: 'Activity 3',
    description: 'Activity test',
    order: 2,
    type: enActivityType.BLOCK_ACTIVITY,
    phase_id: phase.id,
  });

  await createManyOptions(activity3.id);

  const activity4 = await activitiesRepository.create({
    title: 'Activity 4',
    description: 'Activity test',
    order: 3,
    type: enActivityType.BLOCK_ACTIVITY,
    phase_id: phase.id,
  });

  await createManyOptions(activity4.id);

  const activity5 = await activitiesRepository.create({
    title: 'Activity 5',
    description: 'Activity test',
    order: 4,
    type: enActivityType.BLOCK_ACTIVITY,
    phase_id: phase.id,
  });

  await createManyOptions(activity5.id);

  const activity6 = await activitiesRepository.create({
    title: 'Activity 6',
    description: 'Activity test',
    order: 5,
    type: enActivityType.BLOCK_ACTIVITY,
    phase_id: phase.id,
  });

  phase.activities = [
    activity1,
    activity2,
    activity3,
    activity4,
    activity5,
    activity6,
  ];

  return phase;
}

export async function createTheoryPhase(map_id: string): Promise<Phase> {
  const phasesRepository = new PhasesRepository();

  const phase = await phasesRepository.create({
    title: 'Theory Phase',
    type: enType.THEORY,
    map_id,
    max_level: 1,
    description: 'Description theory phase test',
    order: 0,
    markdown_text: '# Theory Phase',
  });

  return phase;
}
