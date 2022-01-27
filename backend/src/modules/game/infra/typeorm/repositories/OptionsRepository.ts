import { getRepository, Repository } from 'typeorm';

import { ICreateOptionDTO } from '@modules/game/dtos/ICreateOptionDTO';
import { IOptionsRepository } from '@modules/game/repositories/IOptionsRepository';

import { Option } from '../entities/Option';

class OptionsRepository implements IOptionsRepository {
  private repository: Repository<Option>;

  constructor() {
    this.repository = getRepository(Option);
  }

  async create({
    activity_id,
    hexadecimal_color,
    name,
    type,
  }: ICreateOptionDTO): Promise<Option> {
    const option = this.repository.create({
      activity_id,
      hexadecimal_color,
      name,
      type,
    });

    await this.repository.save(option);

    return option;
  }

  async findByIds(ids: string[]): Promise<Option[]> {
    const options = await this.repository.findByIds(ids);
    return options;
  }
}

export { OptionsRepository };
