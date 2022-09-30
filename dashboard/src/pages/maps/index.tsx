import { GetServerSideProps } from "next";
import Head from "next/head";
import { PencilSimple, X } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { withSSRAuth } from "../../utils/withSSRAuth";

interface Map {
  id: string;
  title: string;
  description: string;
  order: number;
}

export default function Maps() {
  const [maps, setMaps] = useState<Map[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const dialogRef = useRef<HTMLDialogElement>(null);

  function handleOpenModal() {
    dialogRef.current?.showModal();
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    dialogRef.current?.close();
    setIsModalOpen(false);
  }

  useEffect(() => {
    async function loadData() {
      const response = await api.get("/maps");

      setMaps(response.data);
    }

    loadData();
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard DevLândia | Listagem de mapas</title>
      </Head>
      <div className="flex w-full h-screen overflow-auto ">
        <Sidebar />

        <div className="flex flex-1 bg-gray-950">
          <div className="mt-28 ml-3">
            <h1 className="text-gray-150 text-4xl font-medium">Listagem de mapas</h1>

            <table className="w-full mt-9 border-separate border-spacing-y-2"> 
              <thead>
                <tr>
                  <th className="font-normal text-base text-gray-450 text-left px-5">Título</th>
                  <th className="font-normal text-base text-gray-450 text-left px-5">Descrição</th>
                  <th className="font-normal text-base text-gray-450 text-center">Ordem</th>
                  <th className="font-normal text-base text-gray-450 text-left px-5">id</th>
                </tr>
              </thead>

              <tbody>
                {
                  maps.map(map => (
                    <tr key={map.id}>
                      <td className="bg-gray-900 rounded-tl-md rounded-bl-md px-5 py-4 text-base font-normal text-gray-400">
                        {map.title}
                      </td>
                      <td className="bg-gray-900 px-5 py-4 text-base font-normal text-gray-400">
                        {map.description}
                      </td>
                      <td className="bg-gray-900 px-5 py-4 text-base font-normal text-gray-400">
                        {map.order}
                      </td>
                      <td className="bg-gray-900 px-5 py-4 text-xs font-normal text-blue-350">
                        {map.id}
                      </td>
                      <td className="bg-gray-900 rounded-tr-md rounded-br-md text-white pr-5 py-4">
                        <button 
                          onClick={handleOpenModal}
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
              className={`${isModalOpen && 'backdrop:bg-black backdrop:opacity-60 rounded-xl max-w-2xl w-full max-h-96 h-full bg-gray-850 flex flex-col p-0 px-7 py-5'}`} 
            >
              <button 
                onClick={handleCloseModal}
                className="text-gray-450 self-end border-0 bg-transparent"
              >
                <X size={32} />
              </button>
            </dialog>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (context) => {
  return {
    props: {}
  }
})