import { Activity } from '../../activities/infra/typeorm/entities/Activity';

enum enType {
  THEORY = 'theory',
  PRACTICE = 'practice',
}

interface ICreatePhaseDTO {
  id?: string;
  map_id: string;
  title: string;
  max_level: number;
  description: string;
  type: enType;
  activities?: Activity[];
  markdown_text?: string;
  order: number;
  hexadecimal_color?: string;
}

export { ICreatePhaseDTO };
