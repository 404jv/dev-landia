import { In, Repository } from 'typeorm';

import { ICreateOptionDTO } from '@modules/activities/dtos/ICreateOptionDTO';
import { IOptionsRepository } from '@modules/activities/repositories/IOptionsRepository';
import { postgresDatabaseSource } from '@shared/infra/typeorm';

import { Option } from '../entities/Option';

class OptionsRepository implements IOptionsRepository {
  private repository: Repository<Option>;

  constructor() {
    this.repository = postgresDatabaseSource.getRepository(Option);
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
    const options = await this.repository.findBy({ id: In(ids) });
    return options;
  }

  async findById(id: string): Promise<Option> {
    const option = await this.repository.findOne({ where: { id } });
    return option;
  }
}

export { OptionsRepository };
