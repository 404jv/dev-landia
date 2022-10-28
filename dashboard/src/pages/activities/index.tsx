import Head from "next/head";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { PencilSimple, X } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "../../components/Form/Button";
import { InputWithLabel } from "../../components/Form/InputWithLabel";
import { Select } from "../../components/Form/Select";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../components/Form/Input";

interface Phase {
  id: string;
  title: string;
  order: number;
}

interface Activity {
  id: string;
  title: string;
  order: number;
  type: 'quiz' | 'block_activity';
  is_needed_code: string;
  phase: {
    id: string;
    title: string;
    order: number;
  };
  description: string;
  tips: {
    name: string;
  }[];
}

interface UpdateActivityFormData {
  title: string;
  order: number;
  type: 'quiz' | 'block_activity';
  is_needed_code: string;
  phase_id: string;
  description: string;
}

const updateActivityFormSchema = yup.object().shape({
  title: yup.string().required("Título obrigatório."),
  order: yup.number().min(0, "A ordem deve ser maior ou igual a zero.").typeError("Número inválido."),
  type: yup.string().oneOf(['quiz', 'block_activity'], 'A atividade só pode ser do tipo quiz ou block_activity.').required("Escolha o tipo da atividade"),
  is_needed_code: yup.string().oneOf(['true', 'false'], 'Escolha sim ou não.').required("Escolha sim ou não."),
  phase_id: yup.string().required("Id da fase é obrigatório.").trim("Id da fase é obrigatório."),
  description: yup.string().required("Descrição obrigatória."),
});

export default function Activities() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [phases, setPhases] = useState<Phase[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<Activity>({} as Activity);
  const [tips, setTips] = useState<string[]>(['']);

  const { register, handleSubmit, formState, reset } = useForm<UpdateActivityFormData>({
    resolver: yupResolver(updateActivityFormSchema),
    defaultValues: {
      title: selectedActivity.title,
      description: selectedActivity.description,
      is_needed_code: selectedActivity.is_needed_code,
      phase_id: selectedActivity.phase?.id,
      order: selectedActivity.order,
      type: selectedActivity.type,
    }
  });

  const dialogRef = useRef<HTMLDialogElement>(null);

  function handleOpenModal(id: string) {
    handleSelectActivity(id);

    dialogRef.current?.showModal();
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    dialogRef.current?.close();
    setTips([" "]);
    setIsModalOpen(false);
  }

  function handleSelectActivity(id: string) {
    const activity = activities.find(activity => activity.id === id) as Activity;
    setSelectedActivity(activity);

    const tipsFormatted = activity.tips.map(tip => {
      return tip.name
    });

    setTips(tipsFormatted);
  }

  const handleUpdateActivity: SubmitHandler<UpdateActivityFormData> = async ({
    title,
    description,
    is_needed_code,
    order,
    phase_id,
    type
  }) => {
    setIsLoading(true);

    try {
      toast.success('Fase atualizada.');

      handleCloseModal();
      loadData();
    } catch (error) {
      toast.error('Erro ao atualizar atividade.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleAddTip() {
    setTips(oldState => [...oldState, ''])
  }

  function handleChangeTip(index: number, text: string) {
    const editTips = tips;
    editTips[index] = text;
    setTips(editTips);
  }

  async function loadData() {
    const responseActivities = await api.get("/activities");

    setActivities(responseActivities.data);

    const responsePhases = await api.get("/phases");

    setPhases(responsePhases.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    reset(selectedActivity)
  }, [selectedActivity, reset]);

  const activityTypes = [
    {
      id: '123',
      title: 'block_activity',
      value: 'block_activity'
    },
    {
      id: '321',
      title: 'quiz',
      value: 'quiz'
    },
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

  return (
    <>
      <Head>
        <title>Dashboard DevLândia | Listagem de mapas</title>
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
            <h1 className="text-gray-150 text-4xl font-medium">Listagem de atividades</h1>

            <table className="max-w-5xl w-full mt-9 pb-4 border-separate border-spacing-y-2 overflow-x-auto block whitespace-nowrap scrollbar scrollbar-thumb-gray-450 scrollbar-track-gray-850">
              <thead>
                <tr>
                  <th className="font-normal text-base text-gray-450 text-left px-5">Título</th>
                  <th className="font-normal text-base text-gray-450 text-left px-5">Descrição</th>
                  <th className="font-normal text-base text-gray-450 text-center">Ordem</th>
                  <th className="font-normal text-base text-gray-450 text-left px-5">Tipo</th>
                  <th className="font-normal text-base text-gray-450 text-left px-5">É necessário código?</th>
                  <th className="font-normal text-base text-gray-450 text-left px-5">Fase</th>
                  <th className="font-normal text-base text-gray-450 text-left px-5">Dicas</th>
                  <th className="font-normal text-base text-gray-450 text-left px-5">id</th>
                </tr>
              </thead>

              <tbody>
                {
                  activities.map(activity => (
                    <tr className="relative" key={activity.id}>
                      <td className="bg-gray-900 rounded-tl-md rounded-bl-md px-5 py-4 text-base font-normal text-gray-400">
                        {activity.title}
                      </td>
                      <td className="bg-gray-900 px-5 py-4 text-base font-normal text-gray-400">
                        {activity.description}
                      </td>
                      <td className="bg-gray-900 px-5 py-4 text-base font-normal text-gray-400">
                        {activity.order}
                      </td>
                      <td className="bg-gray-900 px-5 py-4 text-base font-normal text-gray-400">
                        {activity.type}
                      </td>
                      <td className="bg-gray-900 px-5 py-4 text-base font-normal text-gray-400">
                        {String(activity.is_needed_code)}
                      </td>
                      <td className="bg-gray-900 px-5 py-4 text-base font-normal text-gray-400">
                        {activity.phase.title}, {activity.phase.order}
                      </td>
                      <td className="bg-gray-900 px-5 py-4 text-base font-normal text-gray-400">
                        {activity.tips?.map((tip, index) => {
                          if (index === activity.tips.length - 1) {
                            return `${tip.name}`
                          } else {
                            return `${tip.name} | `
                          }
                        })}
                      </td>
                      <td className="bg-gray-900 px-5 py-4 text-xs font-normal text-blue-350">
                        {activity.id}
                      </td>
                      <td className="sticky right-0 bg-gray-900 rounded-tr-md rounded-br-md text-white pr-5 py-4">
                        <button 
                          onClick={() => handleOpenModal(activity.id)}
                          className="w-6 h-6 bg-gray-450 rounded-md flex items-center justify-center hover:opacity-90"
                        >
                          <PencilSimple weight="fill" size={12} />
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>

            <dialog
              ref={dialogRef}
              onClose={handleCloseModal}
              className={`${isModalOpen && 'backdrop:bg-black backdrop:opacity-60 rounded-xl max-w-3xl w-full bg-gray-850 flex flex-col p-0 px-7 py-5 overflow-y-auto'}`}
            >
              <button 
                onClick={handleCloseModal}
                className="text-gray-450 self-end border-0 bg-transparent"
              >
                <X size={32} />
              </button>

              <form method="post" onSubmit={handleSubmit(handleUpdateActivity)}>
                <div className="flex flex-col gap-5 my-4">
                  <div className="flex gap-5">
                    <InputWithLabel 
                      label="Título"
                      variant="dark"
                      defaultValue={selectedActivity.title}
                      {...register("title")}
                      error={formState.errors.title?.message as string}
                    />
                    <InputWithLabel 
                      label="Descrição"
                      variant="dark"
                      defaultValue={selectedActivity.description}
                      {...register("description")}
                      error={formState.errors.description?.message as string}
                    />
                  </div>

                  <div className="flex gap-5">  
                    <Select
                      label="Fase"
                      variant="dark" 
                      options={phases.map(phase => {
                        return {
                          id: phase.id,
                          title: phase.title,
                          description: String(phase.order),
                          value: phase.id,
                        }
                      })}
                      defaultSelected={selectedActivity.phase?.id}
                      defaultValue={selectedActivity.phase?.id}
                      {...register("phase_id")}
                      error={formState.errors.phase_id?.message as string}
                    />       
                    <InputWithLabel
                      label="Ordem"
                      variant="dark"      
                      type="number"   
                      inputSize="small"
                      defaultValue={selectedActivity.order}   
                      min={0}   
                      {...register("order")}
                      error={formState.errors.order?.message as string}
                    />
                  </div>

                  <div className="flex gap-5">         
                    <Select
                      label="Tipo"
                      variant="dark" 
                      options={activityTypes}
                      defaultSelected={selectedActivity.type}
                      defaultValue={selectedActivity.type}
                      {...register("type")}
                      error={formState.errors.type?.message as string}
                    /> 

                    <Select
                      label="É necessário código?"
                      variant="dark"
                      options={isNeededCodeOptions}
                      {...register("is_needed_code")}
                      error={formState.errors.is_needed_code?.message}
                    />
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

                  <div className="grid grid-cols-2 gap-5">
                    {tips.map((tip, index) => (
                      <Input
                        key={index}
                        variant="dark"
                        placeholder={`Dica ${index + 1}`}
                        defaultValue={tip}
                        onChange={(evt) => handleChangeTip(index, evt.target.value)}
                      />
                    ))}
                  </div>
                </div>

                <div className="my-7">
                  <Button 
                    title="Editar Fase"
                    loading={isLoading}
                    disabled={isLoading}
                  />
                </div>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </>
  )
}