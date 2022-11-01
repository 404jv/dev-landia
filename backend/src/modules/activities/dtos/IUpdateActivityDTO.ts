import { Option } from '../infra/typeorm/entities/Option';

enum enActivityType {
  BLOCK_ACTIVITY = 'block_activity',
  QUIZ = 'quiz',
}

interface IUpdateActivityDTO {
  id: string;
  title: string;
  description: string;
  type: enActivityType;
  phase_id: string;
  is_needed_code?: boolean;
  options: Option[];
  order: number;
  created_at?: Date;
  activity_answer: Option[];
  default_code: Option[];
}

export { IUpdateActivityDTO };
