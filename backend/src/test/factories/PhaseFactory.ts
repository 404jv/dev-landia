import { Phase } from '@modules/phases/infra/typeorm/entities/Phase';
import { PhasesRepository } from '@modules/phases/infra/typeorm/repositories/PhasesRepository';

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
    order: 1,
    type: enType.PRACTICE,
  });

  return phase;
}
