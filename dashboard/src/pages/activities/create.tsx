import Head from "next/head";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { Header } from "../../components/Header";
import { ToastContainer, toast } from "react-toastify";
import { Sidebar } from "../../components/Sidebar";
import { InputWithLabel } from "../../components/Form/InputWithLabel";
import { useForm, SubmitHandler } from "react-hook-form";
import { Select } from "../../components/Form/Select";
import { Button } from "../../components/Form/Button";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Input } from "../../components/Form/Input";
import { order } from "../../utils/orderArrayByCreatedAt";

interface Phase {
  id: string;
  title: string;
  order: number;
}

interface Option {
  name: string;
  abstracted_name?: string;
  type: 'js_function' | 'command';
  hexadecimal_color: string;
}

interface CreateActivityFormData {
  title: string;
  order: number;
  type: 'quiz' | 'block_activity';
  is_needed_code: string;
  phase_id: string;
  description: string;
}

const createActivityFormSchema = yup.object().shape({
  title: yup.string().required("Título obrigatório."),
  order: yup.number().min(0, "A ordem deve ser maior ou igual a zero.").typeError("Número inválido."),
  type: yup.string().oneOf(['quiz', 'block_activity'], 'A atividade só pode ser do tipo quiz ou block_activity.').required("Escolha o tipo da atividade"),
  is_needed_code: yup.string().oneOf(['true', 'false'], 'Escolha sim ou não.').required("Escolha sim ou não."),
  phase_id: yup.string().required("Id da fase é obrigatório.").trim("Id da fase é obrigatório."),
  description: yup.string().required("Descrição obrigatória."),
});

export default function CreateActivities() {
  const [phases, setPhases] = useState<Phase[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tips, setTips] = useState<string[]>([]);
  const [options, setOptions] = useState<Option[]>([]);

  const { register, handleSubmit, formState, reset } = useForm<CreateActivityFormData>({
    resolver: yupResolver(createActivityFormSchema)
  });

  const handleCreateActivity: SubmitHandler<CreateActivityFormData>
   = async ({ title, order, type, is_needed_code, phase_id, description }) => {
    setIsLoading(true);

    try {
      tips.forEach(tip => {
        if (tip === "") {
          throw new Error("Preencha o campo das dicas criadas.");
        }
      });

      options.forEach(option => {
        if (option.name === undefined || option.hexadecimal_color === undefined || option.type === undefined) {
          throw new Error("Preencha o campo das opções criadas.");
        }
      })

      await api.post("/activities/create", {
        title,
        order,
        type,
        is_needed_code: is_needed_code == 'true' ? true : false,
        phase_id,
        description,
        tips,
        options
      })

      reset();

      setOptions([]);
      setTips([]);

      toast.success("Atividade criada.");
    } catch (error: any) {
      if (error.message === "Preencha o campo das dicas criadas.") {
        toast.error(error.message);
        return;
      } else if (error.message === "Preencha o campo das opções criadas.") {
        toast.error(error.message);
      } else {
        toast.error("Erro ao criar atividade.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  function handleAddOption() {
    setOptions(oldState => [...oldState, {} as Option])
  }

  function handleChangeOption(
    index: number, 
    text: string, 
    field: 'name' | 'abstracted_name' | 'hexadecimal_color' | 'type'
  ) {
    const editOptions = options;
    
    if (field === 'name') {
      editOptions[index].name = text;
    } else if (field === 'abstracted_name') {
      editOptions[index].abstracted_name = text;
    } else if (field === 'hexadecimal_color') {
      editOptions[index].hexadecimal_color = text;
    } else {
      editOptions[index].type = text as 'js_function' | 'command'
    }

    setOptions(editOptions)
  }

  function handleAddTip() {
    setTips(oldState => [...oldState, ''])
  }

  function handleChangeTip(index: number, text: string) {
    const editTips = tips;
    editTips[index] = text;
    setTips(editTips);
  }

  function handleDeleteTip(index: number) {
    const newTips = tips.filter((tip, i) => index !== i);
    
    newTips.forEach((tip, index) => {
      const field = document.getElementById(`tip${index}`) as HTMLInputElement;
      field.value = tip
    });

    setTips(newTips)
  }

  async function loadData() {
    const response = await api.get("/phases");

    const orderedPhases = order(response.data)

    setPhases(orderedPhases);
  }

  useEffect(() => {
    loadData();
  }, []);

  const activitiesTypes = [
    {
      id: '123',
      title: 'Quiz',
      value: 'quiz'
    },
    {
      id: '321',
      title: 'Block Activity',
      value: 'block_activity'
    }
  ];

  const isNeededCodeOptions = [
    {
      id: '123',
      title: 'Sim',
      value: 'true'
    },
    {
      id: '321',
      title: 'Não',
      value: 'false'
    }
  ];

  const optionsTypes = [
    {
      id: '123',
      title: 'Js_Function',
      value: 'js_function'
    },
    {
      id: '321',
      title: 'Command',
      value: 'command'
    }
  ]

  return (
    <>
      <Head>
        <title>Dashboard DevLândia | Criação de atividades</title>
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
            <h1 className="text-gray-150 text-4xl font-medium">Criação de atividades</h1>
            <form onSubmit={handleSubmit(handleCreateActivity)} className="mt-9 px-4">
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
                    min={0}
                  />
                </div>

                <div className="flex gap-5">
                  <Select
                    label="Tipo"
                    options={activitiesTypes}
                    {...register("type")}
                    error={formState.errors.type?.message}
                  />

                  <Select
                    label="É necessário código?"
                    options={isNeededCodeOptions}
                    {...register("is_needed_code")}
                    error={formState.errors.is_needed_code?.message}
                  />
                </div>

                <div className="flex gap-5">
                  <Select
                    label="Fase"
                    options={phases.map(phase => {
                      return {
                        id: phase.id,
                        title: phase.title,
                        description: String(phase.order),
                        value: phase.id
                      }
                    })}
                    {...register("phase_id")}
                    error={formState.errors.phase_id?.message}
                  />

                  <InputWithLabel
                    label="Descrição"
                    {...register("description")}
                    error={formState.errors.description?.message}
                  />
                </div>

                <div className="w-full flex items-center justify-between mt-6">
                  <h3 className="text-base text-blue-250 tracking-wider">Opções</h3>
                  <Button 
                    type="button" 
                    onClick={handleAddOption}
                    title="+ Adicionar Opção"
                    variant="small"
                  />
                </div>

                <div className="flex flex-col gap-6 mb-6">
                  {options.map((option, index) => (
                    <div key={index}>
                      <h4 className="text-lg text-white">
                        Opção {index + 1}
                      </h4>

                      <div className="mt-3 grid grid-cols-2 gap-5">
                        <InputWithLabel
                          name="name"
                          label="Name"
                          onChange={(evt) => handleChangeOption(index, evt.target.value, "name")}
                        />
                        <InputWithLabel
                          name="hexadecimal_color"
                          label="Cor hexadecimal"
                          onChange={(evt) => handleChangeOption(index, evt.target.value, "hexadecimal_color")}
                        />
                        <InputWithLabel
                          name="abstracted_name"
                          label="Nome abstrato"
                          optional={true}
                          onChange={(evt) => handleChangeOption(index, evt.target.value, "abstracted_name")}
                        />
                        <Select
                          name="options_types"
                          label="Tipo"
                          options={optionsTypes}
                          onChange={(evt) => handleChangeOption(index, evt.target.value, "type")}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="w-full flex items-center justify-between">
                  <h3 className="text-base text-blue-250 tracking-wider">Dicas</h3>
                  <Button 
                    type="button" 
                    onClick={handleAddTip}
                    title="+ Adicionar Dica"
                    variant="small"
                  />
                </div>

                <div className="grid items-center grid-cols-2 gap-5">
                  {tips.map((tip, index) => (
                    <>
                      <Input
                        id={`tip${index}`}
                        key={index}
                        placeholder={`Dica ${index + 1}`}
                        onChange={(evt) => handleChangeTip(index, evt.target.value)}
                        hasDeleteButton={true}
                        deleteFunction={() => handleDeleteTip(index)}
                      />
                    </>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <Button 
                  loading={isLoading} 
                  disabled={isLoading}
                  title="Criar atividade" 
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