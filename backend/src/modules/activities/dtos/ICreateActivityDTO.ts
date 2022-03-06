import { Option } from '../infra/typeorm/entities/Option';
import { ICreateOptionDTO } from './ICreateOptionDTO';

enum enActivityType {
  BLOCK_ACTIVITY = 'block_activity',
  QUIZ = 'quiz',
}

interface ICreateActivityDTO {
  id?: string;
  title: string;
  description: string;
  type: enActivityType;
  is_needed_code?: boolean;
  options?: ICreateOptionDTO[];
  order: number;
  created_at?: Date;
  activity_answer?: Option[];
  default_code?: Option[];
  phase_id: string;
}

export { ICreateActivityDTO };
