import Head from "next/head";
import { PencilSimple, X } from "phosphor-react";
import { useEffect, useRef, useState } from "react"
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

interface Phase {
  id: string;
  title: string;
  order: number;
  type: 'theory' | 'practice';
  max_level: number;
  map: {
    id: string;
    title: string;
    order: number;
  };
  hexadecimal_color: string;
  description: string;
  markdown_text: string;
}

export default function Phases() {
  const [phases, setPhases] = useState<Phase[]>([]);
  const [maps, setMaps] = useState<Map[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhase, setSelectedPhase] = useState<Phase>({} as Phase);

  const dialogRef = useRef<HTMLDialogElement>(null);

  function handleOpenModal(id: string) {
    handleSelectPhase(id);

    dialogRef.current?.showModal();
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    dialogRef.current?.close();
    setIsModalOpen(false);
  }

  function handleSelectPhase(id: string) {
    const phase = phases.find(phase => phase.id === id) as Phase;
    setSelectedPhase(phase);
  }

  async function loadData() {
    const responsePhases = await api.get("/phases");

    setPhases(responsePhases.data);

    const responseMaps = await api.get("/maps");

    setMaps(responseMaps.data);
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
                  <th className="font-normal text-base text-gray-450 text-left px-5">Mapa</th>
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
                      <td className="bg-gray-900 px-5 py-4 text-base font-normal text-gray-400">
                        {phase.map.title}, {phase.map.order}
                      </td>
                      <td className="bg-gray-900 px-5 py-4 text-xs font-normal text-blue-350">
                        {phase.id}
                      </td>
                      <td className="bg-gray-900 rounded-tr-md rounded-br-md text-white pr-5 py-4">
                        <button 
                          onClick={() => handleOpenModal(phase.id)}
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
              className={`${isModalOpen && 'backdrop:bg-black backdrop:opacity-60 rounded-xl max-w-3xl w-full bg-gray-850 flex flex-col p-0 px-7 py-5 overflow-hidden'}`}
            >
              <button 
                onClick={handleCloseModal}
                className="text-gray-450 self-end border-0 bg-transparent"
              >
                <X size={32} />
              </button>

              <form method="post">
                <div className="flex flex-col gap-5 my-4">
                  <div className="flex gap-5">
                    <InputWithLabel 
                      name="title"
                      label="Título"
                      variant="dark"
                      defaultValue={selectedPhase.title}
                    />
                    <InputWithLabel 
                      name="description"
                      label="Descrição"
                      variant="dark"
                      defaultValue={selectedPhase.description}
                    />
                  </div>

                  <div className="flex gap-5">       
                    <Select
                      name="type"
                      label="Tipo"
                      variant="dark" 
                      options={phaseTypes}
                      defaultSelected={selectedPhase.type}
                      defaultValue={selectedPhase.type}
                    />  
                    <InputWithLabel
                      name="order"
                      label="Ordem"
                      variant="dark"      
                      type="number"   
                      inputSize="small"
                      defaultValue={selectedPhase.order}      
                    />
                  </div>

                  <div className="flex gap-5">         
                    <InputWithLabel
                      name="hexadecimal_color"
                      label="Cor hexadecimal"
                      variant="dark"        
                      defaultValue={selectedPhase.hexadecimal_color}      
                    />
                    <InputWithLabel
                      name="max_level"
                      label="Level máximo"
                      variant="dark"      
                      type="number"   
                      inputSize="small"
                      defaultValue={selectedPhase.max_level}      
                    />
                  </div>
         
                  <Select
                    name="map_id"
                    label="Mapa"
                    variant="dark" 
                    options={maps.map(map => {
                      return {
                        id: map.id,
                        title: map.title,
                        description: String(map.order),
                        value: map.id,
                      }
                    })}
                    defaultSelected={selectedPhase.map?.id}
                    defaultValue={selectedPhase.map?.id}
                  />  
                  <TextArea
                    name="markdown_text"
                    label="Markdown"
                    variant="dark"        
                    defaultValue={selectedPhase.markdown_text}     
                  />
                </div>

                <div className="my-7">
                  <Button 
                    title="Editar Fase"
                    loading={false}
                    disabled={false}
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