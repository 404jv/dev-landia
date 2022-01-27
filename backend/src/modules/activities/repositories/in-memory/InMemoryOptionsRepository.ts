import { ICreateOptionDTO } from '@modules/activities/dtos/ICreateOptionDTO';
import { Option } from '@modules/activities/infra/typeorm/entities/Option';

import { IOptionsRepository } from '../IOptionsRepository';

class InMemoryOptionsRepository implements IOptionsRepository {
  private repository: Option[] = [];

  async create({
    activity_id,
    hexadecimal_color,
    name,
    type,
  }: ICreateOptionDTO): Promise<Option> {
    const option = new Option();

    Object.assign(option, {
      activity_id,
      hexadecimal_color,
      name,
      type,
    });
    this.repository.push(option);

    return option;
  }

  findByIds(ids: string[]): Promise<Option[]> {
    throw new Error('Method not implemented.');
  }
}

export { InMemoryOptionsRepository };
