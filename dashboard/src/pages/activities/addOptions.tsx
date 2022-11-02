import Head from "next/head";
import { FormEvent, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Select } from "../../components/Form/Select";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { order } from "../../utils/orderArrayByCreatedAt";

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

export default function AddOptions() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity>({} as Activity);
  const [defaultCodeOptions, setDefaultCodeOptions] = useState<string[]>([]);
  const [answerOptions, setAnswerOptions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleAddOptions(evt: FormEvent) {
    evt.preventDefault();

    setIsLoading(true);

    const activity_id = selectedActivity.id;

    try {
      if (activity_id === undefined) {
        throw new Error("Preencha os campos");
      }

      answerOptions.forEach(option => {
        if (option === "") {
          throw new Error("Preencha todos os campos das respostas criadas.")
        }
      });

      defaultCodeOptions.forEach(option => {
        if (option === "") {
          throw new Error("Preencha todos os campos das opções defaults criadas.")
        }
      });

      const selectActivityId = document.getElementById("activity_id") as HTMLSelectElement;
      selectActivityId.selectedIndex = 0;

      setSelectedActivity({} as Activity)
      setAnswerOptions([]);
      setDefaultCodeOptions([]);

      toast.success("Opções adicionadas.");
    } catch (error: any) {
      if (error.message === "Preencha todos os campos das respostas criadas.") {
        toast.error(error.message);
      } else if (error.message === "Preencha todos os campos das opções defaults criadas.") {
        toast.error(error.message);
      } else {
        toast.error("Erro ao adicionar opções.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  function handleSelectActivity(id: string) {
    const activity = activities.find(activity => activity.id === id) as Activity;
    setSelectedActivity(activity);

    setAnswerOptions([]);
    setDefaultCodeOptions([]);
  }

  function handleAddDefaultOption() {
    setDefaultCodeOptions(oldState => [...oldState, ''])
  }

  function handleChangeDefaultOption(index: number, id: string) {
    const editDefaultCodeOptions = defaultCodeOptions;
    editDefaultCodeOptions[index] = id;
    setDefaultCodeOptions(editDefaultCodeOptions);
  }

  function handleAddAnswerOption() {
    setAnswerOptions(oldState => [...oldState, ''])
  }

  function handleChangeAnswerOption(index: number, id: string) {
    const editAnswerOptions = answerOptions;
    editAnswerOptions[index] = id;
    setAnswerOptions(editAnswerOptions);
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
            <form onSubmit={handleAddOptions} className="mt-9 px-4">
              <div className="max-w-3xl w-full flex flex-col gap-4 mb-7">
                <Select
                  id="activity_id"
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
                      <div className="w-full flex items-center gap-6 justify-between">
                        <h3 className="text-base text-white tracking-wider">Opções default</h3>
                        <Button 
                          type="button" 
                          onClick={handleAddDefaultOption}
                          title="+ Adicionar opção default"
                          variant="small"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-5">
                        {defaultCodeOptions.map((option, index) => (
                          <Select
                            key={index}
                            name="defaultCodeOptions"
                            label={`Opção default ${index + 1}`}
                            options={selectedActivity.options.map(option => {
                              return {
                                id: option.id,
                                title: option.name,
                                value: option.id
                              }
                            })}
                            onChange={(evt) => handleChangeDefaultOption(index, evt.target.value)}
                          />
                        ))}
                      </div>

                      <div className="w-full flex items-center gap-6 justify-between">
                        <h3 className="text-base text-white tracking-wider">Opções de resposta</h3>
                        <Button 
                          type="button" 
                          onClick={handleAddAnswerOption}
                          title="+ Adicionar opção de resposta"
                          variant="small"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-5">
                        {answerOptions.map((option, index) => (
                          <Select
                            key={index}
                            name="answerOptions"
                            label={`Opção de resposta ${index + 1}`}
                            options={selectedActivity.options.map(option => {
                              return {
                                id: option.id,
                                title: option.name,
                                value: option.id
                              }
                            })}
                            onChange={(evt) => handleChangeAnswerOption(index, evt.target.value)}
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