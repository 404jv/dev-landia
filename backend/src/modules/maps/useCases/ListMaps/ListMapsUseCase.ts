import { inject, injectable } from 'tsyringe';

import { IMapsRepository } from '@modules/maps/repositories/IMapsRepository';

@injectable()
class ListMapsUseCase {
  constructor(
    @inject('MapsRepository')
    private mapsRepository: IMapsRepository
  ) {}

  async execute() {
    const maps = await this.mapsRepository.list();

    return maps;
  }
}

export { ListMapsUseCase };
