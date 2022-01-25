import { inject, injectable } from 'tsyringe';

import { IAddOptionsToActivityDTO } from '@modules/game/dtos/IAddOptionsToActivityDTO';
import { IActivitiesOptionsRepository } from '@modules/game/repositories/IActivitiesOptionsRepository';
import { IActivitiesRepository } from '@modules/game/repositories/IActivitiesRepository';

import { ActivityNotFoundError } from './errors/PhaseNotFoundError';

@injectable()
class AddOptionsToActivityUseCase {
  constructor(
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository,
    @inject('ActivitiesAnswersRepository')
    private activitiesAnswersRepository: IActivitiesOptionsRepository
  ) {}

  async execute({
    activityAnswerOptionsIds,
    activityDefaultCodeOptionsIds,
    activity_id,
  }: IAddOptionsToActivityDTO): Promise<void> {
    const activityExists = await this.activitiesRepository.findById(
      activity_id
    );

    if (!activityExists) {
      throw new ActivityNotFoundError();
    }

    console.log(activityExists.default_code);

    /*
      Não posso fazer um array de string!
      Vai ter que ser um array de objetos com order e id

      Talvez se eu achar alguma forma de substituir sempre as options anterior
      com esse novo array de options. Ae o order fica o index da option
      no array.
    */

    // activityAnswerOptionsIds.map(async (option_id, index) => {
    //   await this.activitiesAnswerRepository.create({
    //     activity_id,
    //     option_id,
    //     order: index + 1,
    //   });
    // });
  }
}

export { AddOptionsToActivityUseCase };
