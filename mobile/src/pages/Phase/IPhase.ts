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

export type PracticeActivity = {
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

export type TheoreticalActivity = {
  id: string;
  map_id: string;
  title: string;
  markdown_text: string;
};

export type PhaseParams = {
  phase: {
    created_at: string;
    id: string;
    map_id: string;
    description: string;
    markdown_text?: string | null;
    max_level?: number | null;
    order: number;
    title: string;
    type: string;
    current_level: number;
  };
};
