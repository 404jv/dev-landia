import Head from "next/head";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { Button } from "../../components/Form/Button";
import { InputWithLabel } from "../../components/Form/InputWithLabel";
import { Select } from "../../components/Form/Select";
import { TextArea } from "../../components/Form/TextArea";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

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

const createPhaseFormSchema = yup.object().shape({
  title: yup.string().required("Título obrigatório."),
  order: yup.number().min(0, "A ordem deve ser maior ou igual a zero.").typeError("Número inválido."),
  type: yup.string().oneOf(['theory', 'practice'], 'A atividade só pode ser teórica ou prática.').required("Escolha o tipo da fase"),
  max_level: yup.number().required("O level máximo é obrigatório.").typeError("Número inválido.")
    .when(['type'], (type: 'theory' | 'practice') => {
      if (type === 'theory') {
        return yup.number().oneOf([1], 'Level máximo deve ser 1').typeError("Número inválido.")
      }
       
      return yup.number().min(3, 'Level máximo deve ser igual ou maior a 3').typeError("Número inválido.")
    }),
  map_id: yup.string(),
  hexadecimal_color: yup.string(),
  description: yup.string().required("Descrição obrigatória."),
  markdown_text: yup.string(),
})

export default function CreatePhases() {
  const [maps, setMaps] = useState<Map[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState, reset, control } = useForm<CreatePhaseFormData>({
    resolver: yupResolver(createPhaseFormSchema)
  });

  const handleCreatePhase: SubmitHandler<CreatePhaseFormData> 
   = async ({ title, order, type, max_level, map_id, hexadecimal_color, description, markdown_text }) => {
    alert('Loco de bão');

    reset();
  }

  async function loadData() {
    const response = await api.get("/maps");

    setMaps(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  const phaseTypes = [
    {
      id: '123',
      title: 'theory',
      value: 'theory'
    },
    {
      id: '321',
      title: 'practice',
      value: 'practice'
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
            <form onSubmit={handleSubmit(handleCreatePhase)} className="mt-9 px-4">
              <div className="max-w-3xl w-full flex flex-col gap-4 mb-7">
                <div className="flex gap-5">
                  <InputWithLabel
                    label="Título"
                    {...register("title")}
                    error={formState.errors.title?.message}
                  />

                  <InputWithLabel
                    label="Ordem"
                    type="number"
                    inputSize="small"
                    {...register("order")}
                    error={formState.errors.order?.message}
                  />
                </div>

                <div className="flex gap-5">
                  <Select
                    label="Tipo"
                    {...register("type")}
                    options={phaseTypes}
                    error={formState.errors.type?.message}
                  />

                  <InputWithLabel
                    label="Level máximo"
                    type="number"
                    inputSize="small"
                    {...register("max_level")}
                    error={formState.errors.max_level?.message}
                  />
                </div>

                <div className="flex gap-5">
                  <Select
                    label="Mapa"
                    {...register("map_id")}
                    options={maps.map(map => {
                      return {
                        id: map.id,
                        title: map.title,
                        description: map.description,
                        value: map.id,
                      }
                    })}
                    error={formState.errors.map_id?.message}
                  />

                  <InputWithLabel
                    label="Cor hexadecimal"
                    inputSize="small"
                    {...register("hexadecimal_color")}
                    optional={true}
                    error={formState.errors.hexadecimal_color?.message}
                  />
                </div>

                <InputWithLabel
                  label="Descrição"
                  {...register("description")}
                  error={formState.errors.description?.message}
                />

                <TextArea
                  label="Markdown"
                  {...register("markdown_text")}
                  optional
                  error={formState.errors.markdown_text?.message}
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