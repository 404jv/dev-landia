import { inject, injectable } from 'tsyringe';

import { IActivitiesRepository } from '../../repositories/IActivitiesRepository';

@injectable()
class ListActivitiesUseCase {
  constructor(
    @inject('ActivitiesRepository')
    private activitiesRepository: IActivitiesRepository
  ) {}

  async execute() {
    const activities = await this.activitiesRepository.list();

    return activities;
  }
}

export { ListActivitiesUseCase };
