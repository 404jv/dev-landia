import { Repository, getRepository } from 'typeorm';

import { ICreateOptionDTO } from '@modules/activities/dtos/ICreateOptionDTO';
import { IOptionsRepository } from '@modules/activities/repositories/IOptionsRepository';

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
    abstracted_name,
  }: ICreateOptionDTO): Promise<Option> {
    const option = this.repository.create({
      activity_id,
      hexadecimal_color,
      name,
      type,
      abstracted_name,
    });

    await this.repository.save(option);

    return option;
  }

  async findByIds(ids: string[]): Promise<Option[]> {
    const options = await this.repository.findByIds(ids);
    return options;
  }

  async findById(id: string): Promise<Option> {
    const option = await this.repository.findOne({ where: { id } });
    return option;
  }
}

export { OptionsRepository };
