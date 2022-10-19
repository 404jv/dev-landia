export interface IOption {
  id: string;
  name: string;
  type: string;
  hexadecimal_color: string;
}

export interface TipsProps {
  id: string;
  name: string;
}

export type Activity = {
  id: string;
  title: string;
  description: string;
  type: string;
  default_code: IOption[];
  activity_answer: IOption[];
  is_needed_tests: boolean;
  tips: TipsProps[];
  options: IOption[];
  order: number;
};
