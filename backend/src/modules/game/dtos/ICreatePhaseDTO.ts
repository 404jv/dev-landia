enum enType {
  THEORY = 'theory',
  PRACTICE = 'practice',
}

interface ICreatePhaseDTO {
  id?: string;
  map_id: string;
  title: string;
  max_level: number;
  type: enType;
  markdown_text?: string;
}

export { ICreatePhaseDTO };
