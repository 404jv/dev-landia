import { inject, injectable } from 'tsyringe';

import { IAddOptionsToActivityDTO } from '@modules/game/dtos/IAddOptionsToActivityDTO';
import { Activity } from '@modules/game/infra/typeorm/entities/Activity';
import { IActivitiesRepository } from '@modules/game/repositories/IActivitiesRepository';
import { IOptionsRepository } from '@modules/game/repositories/IOptionsRepository';

import { ActivityNotFoundError } from './errors/PhaseNotFoundError';

@injectable()
class AddOptionsToActivityUseCase {
  constructor(
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
    @inject('OptionsRepository')
    private optionsRepository: IOptionsRepository
  ) {}

  async execute({
    activityAnswerOptionsIds,
    activityDefaultCodeOptionsIds,
    activity_id,
  }: IAddOptionsToActivityDTO): Promise<Activity> {
    const activityExists = await this.activitiesRepository.findById(
      activity_id
    );

    if (!activityExists) {
      throw new ActivityNotFoundError();
    }

    const defaultCode = await this.optionsRepository.findByIds(
      activityDefaultCodeOptionsIds
    );

    console.log(defaultCode, activityDefaultCodeOptionsIds);

    /* 
      se as opções se repetirem vai dar ruim, pois o findByIds não retorna
      ids duplicado.

      preciso separar tudo isso em módulos. Simbora Refatora =)
    */

    activityExists.default_code = defaultCode;

    const answerOptions = await this.optionsRepository.findByIds(
      activityAnswerOptionsIds
    );

    activityExists.activity_answer = answerOptions;

    await this.activitiesRepository.update(activityExists);

    return activityExists;
  }
}

export { AddOptionsToActivityUseCase };
