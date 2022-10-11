import Head from "next/head";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { Button } from "../../components/Form/Button";
import { InputWithLabel } from "../../components/Form/InputWithLabel";
import { Select } from "../../components/Form/Select";
import { TextArea } from "../../components/Form/TextArea";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";

interface Map {
  id: string;
  title: string;
  description: string;
  order: number;
}

interface CreatePhaseFormData {
  title: string;
  order: number;
  type: 'theory' | 'practice';
  max_level: number;
  map_id: string;
  hexadecimal_color: string;
  description: string;
  markdown_text: string;
}

export default function CreatePhases() {
  const [maps, setMaps] = useState<Map[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState } = useForm<CreatePhaseFormData>();

  async function loadData() {
    const response = await api.get("/maps");

    setMaps(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  const phaseTypes = [
    {
      id: new Date().getTime().toString() + Math.random().toString(),
      title: 'theory',
    },
    {
      id: new Date().getTime().toString() + Math.random().toString(),
      title: 'practice'
    }
  ]

  return (
    <>
      <Head>
        <title>Dashboard DevLândia | Criação de mapas</title>
      </Head>
      <div className="h-screen bg-gray-950 overflow-auto">
        <Header />

        <div className="flex w-full">
          <ToastContainer 
            theme="colored" 
            toastClassName="errorAlert"
            autoClose={2000} 
            pauseOnHover={false} 
          />
          <Sidebar />

          <div className="mt-10 ml-10 flex flex-col">
            <h1 className="text-gray-150 text-4xl font-medium">Criação de fases</h1>
            <form className="mt-9 px-4">
              <div className="max-w-3xl w-full flex flex-col gap-4 mb-7">
                <div className="flex gap-5">
                  <InputWithLabel
                    label="Título"
                    {...register("title")}
                  />

                  <InputWithLabel
                    label="Ordem"
                    type="number"
                    inputSize="small"
                    {...register("order")}
                  />
                </div>

                <div className="flex gap-5">
                  <Select
                    label="Tipo"
                    {...register("type")}
                    options={phaseTypes}
                  />

                  <InputWithLabel
                    label="Level máximo"
                    type="number"
                    inputSize="small"
                    {...register("max_level")}
                  />
                </div>

                <div className="flex gap-5">
                  <Select
                    label="Mapa"
                    {...register("map_id")}
                    options={maps}
                  />

                  <InputWithLabel
                    label="Cor hexadecimal"
                    inputSize="small"
                    {...register("hexadecimal_color")}
                    optional={true}
                  />
                </div>

                <InputWithLabel
                  label="Descrição"
                  {...register("description")}
                />

                <TextArea
                  label="Markdown"
                  {...register("markdown_text")}
                  optional
                />  
              </div>
              
              <div className="mb-10">
                <Button 
                  loading={isLoading} 
                  disabled={isLoading}
                  title="Criar fase" 
                  type="submit"            
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}