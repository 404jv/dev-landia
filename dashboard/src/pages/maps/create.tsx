import { GetServerSideProps } from "next";
import Head from "next/head";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { toast, ToastContainer } from "react-toastify";
import { Button } from "../../components/Form/Button";
import { InputWithLabel } from "../../components/Form/InputWithLabel";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { withSSRAuth } from "../../utils/withSSRAuth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Header } from "../../components/Header";

interface CreateMapFormData {
  title: string;
  description: string;
  order: number;
}

const createMapFormSchema = yup.object().shape({
  title: yup.string().required("Título obrigatório."),
  description: yup.string().required("Descrição obrigatória."),
  order: yup.number().min(0, "A ordem deve ser maior ou igual a zero.").typeError("Digite um número válido."),
})

export default function CreateMaps() {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState, reset } = useForm<CreateMapFormData>({
    resolver: yupResolver(createMapFormSchema)
  })

  const handleCreateMap: SubmitHandler<CreateMapFormData> = async ({ title, description, order }) => {
    setIsLoading(true);

    try {
      await api.post('/maps/create', {
        title,
        description,
        order
      });

      reset();

      toast.success("Mapa criado.");
    } catch (error) {
      toast.error("Erro ao criar mapa.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Dashboard DevLândia | Criação de mapas</title>
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
            <h1 className="text-gray-150 text-4xl font-medium">Criação de mapas</h1>
            <form onSubmit={handleSubmit(handleCreateMap)} className="mt-9 px-4">
              <div className="max-w-3xl w-full flex flex-col gap-4 mb-7">
                <div className="flex gap-5">
                  <InputWithLabel 
                    label="Título" 
                    error={formState.errors.title?.message as string}
                    {...register("title")} 
                  />

                  <InputWithLabel 
                    label="Ordem"             
                    type="number" 
                    inputSize="small"
                    error={formState.errors.order?.message as string}
                    {...register("order")}
                  /> 
                </div>

                <InputWithLabel 
                  label="Descrição" 
                  error={formState.errors.description?.message as string}
                  {...register("description")}
                />    
              </div>

              <Button 
                loading={isLoading} 
                disabled={isLoading}
                title="Criar Mapa" 
                type="submit"            
              />
            </form>
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
