import Head from "next/head";
import { PencilSimple } from "phosphor-react";
import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
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
            <h1 className="text-gray-150 text-4xl font-medium">Listagem de fases</h1>

            <table className="max-w-5xl w-full mt-9 pb-4 border-separate border-spacing-y-2 overflow-x-auto block whitespace-nowrap scrollbar-thumb-gray-450 scrollbar-thin scrollbar-track-gray-850">
              <thead>
                <tr>
                  <th className="font-normal text-base text-gray-450 text-left px-5">Título</th>
                  <th className="font-normal text-base text-gray-450 text-left px-5">Descrição</th>
                  <th className="font-normal text-base text-gray-450 text-center">Ordem</th>
                  <th className="font-normal text-base text-gray-450 text-left px-5">Tipo</th>
                  <th className="font-normal text-base text-gray-450 text-left px-5">Cor hexadecimal</th>
                  <th className="font-normal text-base text-gray-450 text-left px-5">Level máximo</th>
                  <th className="font-normal text-base text-gray-450 text-left px-5">Markdown</th>
                  <th className="font-normal text-base text-gray-450 text-left px-5">id mapa</th>
                  <th className="font-normal text-base text-gray-450 text-left px-5">id</th>
                </tr>
              </thead>

              <tbody>
                {
                  phases.map(phase => (
                    <tr key={phase.id}>
                      <td className="bg-gray-900 rounded-tl-md rounded-bl-md px-5 py-4 text-base font-normal text-gray-400">
                        {phase.title}
                      </td>
                      <td className="bg-gray-900 px-5 py-4 text-base font-normal text-gray-400">
                        {phase.description}
                      </td>
                      <td className="bg-gray-900 px-5 py-4 text-base font-normal text-gray-400">
                        {phase.order}
                      </td>
                      <td className="bg-gray-900 px-5 py-4 text-base font-normal text-gray-400">
                        {phase.type}
                      </td>
                      <td className="bg-gray-900 px-5 py-4 text-base font-normal text-gray-400">
                        {phase.hexadecimal_color}
                      </td>
                      <td className="bg-gray-900 px-5 py-4 text-base font-normal text-gray-400">
                        {phase.max_level}
                      </td>
                      <td className="bg-gray-900 px-5 py-4 text-base font-normal text-gray-400">
                        {phase.markdown_text}
                      </td>
                      <td className="bg-gray-900 px-5 py-4 text-xs font-normal text-blue-350">
                        {phase.map_id}
                      </td>
                      <td className="bg-gray-900 px-5 py-4 text-xs font-normal text-blue-350">
                        {phase.id}
                      </td>
                      <td className="bg-gray-900 rounded-tr-md rounded-br-md text-white pr-5 py-4">
                        <button 
                          onClick={() => {}}
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