import { GetServerSideProps } from "next";
import Head from "next/head";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { PencilSimple, X } from "phosphor-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "../../components/Form/Button";
import { InputWithLabel } from "../../components/Form/InputWithLabel";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { withSSRAuth } from "../../utils/withSSRAuth";
import { SubmitHandler, useForm } from "react-hook-form";
import { Header } from "../../components/Header";

interface Map {
  id: string;
  title: string;
  description: string;
  order: number;
}

interface UpdateMapFormData {
  title: string;
  description: string;
  order: number;
}

const updateMapFormSchema = yup.object().shape({
  title: yup.string().required("Título obrigatório."),
  description: yup.string().required("Descrição obrigatória."),
  order: yup.number().min(0, "A ordem deve ser maior ou igual a zero.").typeError("Digite um número válido."),
})

export default function Maps() {
  const [maps, setMaps] = useState<Map[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMap, setSelectedMap] = useState<Map>({} as Map);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState, reset } = useForm<UpdateMapFormData>({
    resolver: yupResolver(updateMapFormSchema),
    defaultValues: {
      title: selectedMap.title,
      description: selectedMap.description,
      order: selectedMap.order
    }
  })
  
  const dialogRef = useRef<HTMLDialogElement>(null);

  function handleOpenModal(id: string) {
    handleSelectMap(id);

    dialogRef.current?.showModal();
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    dialogRef.current?.close();
    setIsModalOpen(false);
  }

  function handleSelectMap(id: string) {
    const map = maps.find(map => map.id === id) as Map;
    setSelectedMap(map);
  }

  const handleUpdateMap: SubmitHandler<UpdateMapFormData> = async({ title, order, description }) => {
    setIsLoading(true);

    try {
      await api.put(`/maps/update/${selectedMap.id}`, {
        title,
        description,
        order
      });

      toast.success('Mapa atualizado.');

      handleCloseModal();
      loadData();
    } catch (error) {
      toast.error('Erro ao atualizar mapa.');
    } finally {
      setIsLoading(false);
    }
  }

  async function loadData() {
    const response = await api.get("/maps");

    setMaps(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    reset(selectedMap)
  }, [selectedMap, reset]);

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
                          onClick={() => handleOpenModal(map.id)}
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
              className={`${isModalOpen && 'backdrop:bg-black backdrop:opacity-60 rounded-xl max-w-3xl w-full max-h-[28rem] h-full bg-gray-850 flex flex-col p-0 px-7 py-5 overflow-hidden'}`} 
            >
              <button 
                onClick={handleCloseModal}
                className="text-gray-450 self-end border-0 bg-transparent"
              >
                <X size={32} />
              </button>

              <form method="post" onSubmit={handleSubmit(handleUpdateMap)} className="w-full px-7">
                <div className="flex flex-col gap-5 my-4">
                  <div className="flex gap-5">
                    <InputWithLabel 
                      label="Título"
                      variant="dark"
                      defaultValue={selectedMap.title}
                      error={formState.errors.title?.message as string}
                      {...register("title")}
                    />
                    <InputWithLabel
                      label="Ordem"
                      variant="dark"      
                      type="number"   
                      inputSize="small"
                      defaultValue={selectedMap.order}
                      error={formState.errors.order?.message as string}
                      {...register("order")}         
                    />
                  </div>

                  <InputWithLabel
                    label="Descrição"
                    variant="dark"
                    defaultValue={selectedMap.description}
                    error={formState.errors.description?.message as string}
                    {...register("description")}
                  />
                </div>

                <div className="mt-7">
                  <Button 
                    title="Editar Mapa"
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

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (context) => {
  return {
    props: {}
  }
})