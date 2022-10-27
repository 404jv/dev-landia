import Head from "next/head";
import { PencilSimple } from "phosphor-react";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";

interface Activity {
  id: string;
  title: string;
  order: number;
  type: 'quiz' | 'block_activity';
  is_needed_code: boolean;
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

export default function Activities() {
  const [activities, setActivities] = useState<Activity[]>([]);

  function handleOpenModal(id: string) {
    
  }

  async function loadData() {
    const response = await api.get("/activities");

    setActivities(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

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
                            return `${tip.name}, `
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
          </div>
        </div>
      </div>
    </>
  )
}