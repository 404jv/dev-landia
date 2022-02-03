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

  async findByIds(ids: string[]): Promise<Option[]> {
    return this.repository.filter((option) => ids.includes(option.id));
  }

  async findById(id: string): Promise<Option> {
    return this.repository.find((option) => option.id === id);
  }
}

export { InMemoryOptionsRepository };
