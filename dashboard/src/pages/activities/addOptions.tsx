import Head from "next/head";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Select } from "../../components/Form/Select";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { order } from "../../utils/orderArrayByCreatedAt";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form";
import { Checkbox } from "../../components/Form/Checkbox";
import { Button } from "../../components/Form/Button";

interface Option {
  id: string;
  name: string;
}

interface Activity {
  id: string;
  title: string;
  order: number;
  created_at: Date;
  options: Option[]
}

interface AddOptionsFormData {
  activityAnswerOptionsIds: string[];
  activityDefaultCodeOptionsIds: string[];
}

const addOptionsFormSchema = yup.object().shape({
  activityAnswerOptionsIds: yup.array().min(1, 'Pelo menos uma opção como resposta'),
  activityDefaultCodeOptionsIds: yup.array()
})

export default function AddOptions() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity>({} as Activity);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState, reset } = useForm<AddOptionsFormData>({
    resolver: yupResolver(addOptionsFormSchema)
  });

  const handleAddOptions: SubmitHandler<AddOptionsFormData>
   = async ({ activityAnswerOptionsIds, activityDefaultCodeOptionsIds }) => {
    setIsLoading(true);

    const activity_id = selectedActivity.id;

    try {
      reset();

      setSelectedActivity({} as Activity)

      toast.success("Opções adicionadas.");
    } catch (error) {
      toast.error("Erro ao adicionar opções.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleSelectActivity(id: string) {
    const activity = activities.find(activity => activity.id === id) as Activity;
    setSelectedActivity(activity);
  }

  async function loadData() {
    const responseActivities = await api.get("/activities"); 

    const orderedActivites = order(responseActivities.data);

    setActivities(orderedActivites);
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <>
      <Head>
        <title>Dashboard DevLândia | Adicionar opções</title>
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
            <h1 className="text-gray-150 text-4xl font-medium">Adicionar opções</h1>
            <form onSubmit={handleSubmit(handleAddOptions)} className="mt-9 px-4">
              <div className="max-w-3xl w-full flex flex-col gap-4 mb-7">
                <Select
                  name="activity_id"
                  label="Id da atividade"
                  options={activities.map(activity => {
                    return {
                      id: activity.id,
                      title: activity.title,
                      description: String(activity.order),
                      value: activity.id,
                    }
                  })}
                  onChange={(evt) => handleSelectActivity(evt.target.value)}
                />

                {
                  selectedActivity.id !== undefined && (
                    <>
                      <h3 className="text-base text-blue-250 tracking-wider">Ids das respostas</h3>
                      <div className="grid grid-cols-4 gap-6">
                        {selectedActivity.options.map(option => (
                          <Checkbox
                            key={option.id}
                            label={option.name}
                            value={option.id}
                            {...register("activityAnswerOptionsIds")}
                          />
                        ))}
                      </div>

                      <h3 className="text-base text-blue-250 tracking-wider">Ids das opções default</h3>
                      <div className="grid grid-cols-4 gap-6">
                        {selectedActivity.options.map(option => (
                          <Checkbox
                            key={option.id}
                            label={option.name}
                            value={option.id}
                            {...register("activityDefaultCodeOptionsIds")}
                          />
                        ))}
                      </div>
                    </>
                  )
                }
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