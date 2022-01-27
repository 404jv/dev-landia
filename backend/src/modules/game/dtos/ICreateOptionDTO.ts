import { Activity } from '../infra/typeorm/entities/Activity';

enum enOptionType {
  JS_FUNCTION = 'js_function',
  COMMAND = 'command',
}

interface ICreateOptionDTO {
  id?: string;
  name: string;
  activity_id?: string;
  type: enOptionType;
  hexadecimal_color: string;
}

export { ICreateOptionDTO };
