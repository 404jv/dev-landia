export type PhaseProps = {
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
  hexadecimal_color: string;
};

export interface MapProps {
  created_at: string;
  id: string;
  description: string;
  is_done: boolean;
  order: number;
  title: string;
  phases: PhaseProps[];
}

export interface UserInfos {
  total_coins: number;
  total_xp: number;
}
