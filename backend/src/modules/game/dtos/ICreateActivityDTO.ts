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
  created_at?: Date;
}

export { ICreateActivityDTO };
