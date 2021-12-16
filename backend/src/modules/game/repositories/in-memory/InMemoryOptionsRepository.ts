import { ICreateOptionDTO } from '@modules/game/dtos/ICreateOptionDTO';
import { Option } from '@modules/game/infra/typeorm/entities/Option';

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
}

export { InMemoryOptionsRepository };
