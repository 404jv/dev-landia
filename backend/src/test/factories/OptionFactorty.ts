import { Option } from '@modules/activities/infra/typeorm/entities/Option';
import { ActivitiesAnswersRepository } from '@modules/activities/infra/typeorm/repositories/ActivitiesAnswersRepository';
import { ActivitiesDefaultCodeRepository } from '@modules/activities/infra/typeorm/repositories/ActivitiesDefaultCodeRepository';
import { OptionsRepository } from '@modules/activities/infra/typeorm/repositories/OptionsRepository';

enum enOptionType {
  JS_FUNCTION = 'js_function',
  COMMAND = 'command',
}

export async function createManyOptions(
  activity_id: string
): Promise<Option[]> {
  const optionsRepository = new OptionsRepository();
  const activitiesDefaultCodeRepository = new ActivitiesDefaultCodeRepository();
  const activitiesAnswersRepository = new ActivitiesAnswersRepository();

  const option1 = await optionsRepository.create({
    name: 'Option 1',
    hexadecimal_color: '#A6A8FC',
    type: enOptionType.JS_FUNCTION,
    activity_id,
  });

  const option2 = await optionsRepository.create({
    name: 'Option 2',
    hexadecimal_color: '#2288C2',
    type: enOptionType.JS_FUNCTION,
    activity_id,
  });

  const option3 = await optionsRepository.create({
    name: 'Option 3',
    hexadecimal_color: '#AC0C11',
    type: enOptionType.JS_FUNCTION,
    activity_id,
  });

  await activitiesDefaultCodeRepository.create({
    activity_id,
    option_id: option1.id,
    order: 1,
  });

  await activitiesAnswersRepository.create({
    activity_id,
    option_id: option1.id,
    order: 1,
  });

  await activitiesAnswersRepository.create({
    activity_id,
    option_id: option2.id,
    order: 2,
  });

  await activitiesAnswersRepository.create({
    activity_id,
    option_id: option3.id,
    order: 3,
  });

  return [option1, option2, option3];
}
