enum enOptionType {
  JS_FUNCTION = 'js_function',
  COMMAND = 'command',
}

interface ICreateOptionDTO {
  id?: string;
  name: string;
  activity_id?: string;
  type: enOptionType;
  abstracted_name?: string;
  hexadecimal_color: string;
}

export { ICreateOptionDTO };
