import { GetServerSideProps } from "next";
import Head from "next/head";
import { FormEvent, useState } from "react"
import { toast, ToastContainer } from "react-toastify";
import { Button } from "../../components/Form/Button";
import { InputWithLabel } from "../../components/Form/InputWithLabel";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { withSSRAuth } from "../../utils/withSSRAuth";

export default function CreateMaps() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [order, setOrder] = useState(0);

  async function handleCreateMap(evt: FormEvent) {
    evt.preventDefault();

    if (title.trim() === "" || description.trim() === "") {
      return toast.error("Todos os campos são obrigatórios.");
    }

    try {
      await api.post('/maps/create', {
        title,
        description,
        order
      });

      toast.success("Mapa criado.");

      setTitle('');
      setDescription('');
      setOrder(0);
    } catch (error) {
      toast.error("Erro ao criar mapa.");
    }
  }

  return (
    <>
      <Head>
        <title>Dashboard DevLândia | Criação de mapas</title>
      </Head>
      <div className="flex w-full h-screen overflow-auto">
        <ToastContainer 
          theme="colored" 
          toastClassName="errorAlert"
          autoClose={2000} 
          pauseOnHover={false} 
        />
        <Sidebar />

        <div className="flex flex-1 bg-gray-950">
          <div className="mt-28 ml-3">
            <h1 className="text-gray-150 text-4xl font-medium">Criação de mapas</h1>
            <form method="post" onSubmit={handleCreateMap} className="mt-9 px-4">
              <div className="flex gap-5 mb-7">
                <div className="flex flex-col gap-4">
                  <InputWithLabel 
                    label="Título" 
                    name="title" 
                    value={title}
                    onChange={(evt) => setTitle(evt.target.value)}
                    required
                  />
                  <InputWithLabel 
                    label="Descrição" 
                    name="description" 
                    value={description}
                    onChange={(evt) => setDescription(evt.target.value)}
                    required
                  />     
                </div>
                <InputWithLabel 
                  label="Ordem" 
                  name="order" 
                  type="number" 
                  value={order}
                  onChange={(evt) => setOrder(Number(evt.target.value))}
                />
              </div>

              <Button title="Criar Mapa" type="submit" />
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
