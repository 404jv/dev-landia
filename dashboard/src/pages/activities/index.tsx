import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function Activities() {
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
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}