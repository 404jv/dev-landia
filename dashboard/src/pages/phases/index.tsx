import { useEffect, useState } from "react"
import { api } from "../../services/api";

interface Phase {
  id: string;
  title: string;
  order: number;
  type: 'theory' | 'practice';
  max_level: number;
  map_id: string;
  hexadecimal_color: string;
  description: string;
  markdown_text: string;
}

export default function Phases() {
  const [phases, setPhases] = useState<Phase[]>([]);

  async function loadData() {
    const response = await api.get("/phases");

    console.log(response.data);

    setPhases(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <h1>Fases</h1>
  )
}