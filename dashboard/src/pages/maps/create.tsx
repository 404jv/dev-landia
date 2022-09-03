import Head from "next/head";
import Router from "next/router";
import { FormEvent, useContext, useEffect, useState } from "react"
import { Button } from "../../components/Form/Button";
import { InputWithLabel } from "../../components/Form/InputWithLabel";
import { Sidebar } from "../../components/Sidebar";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";

export default function CreateMaps() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [order, setOrder] = useState(0);

  const { isAuthenticated } = useContext(AuthContext);
  
  useEffect(() => {
    if (!isAuthenticated) {
      Router.push('/');
    }
  }, [isAuthenticated])

  async function handleCreateMap(evt: FormEvent) {
    evt.preventDefault();

    try {
      await api.post('/maps/create', {
        title,
        description,
        order
      });

      alert('Mapa criado.');

      setTitle('');
      setDescription('');
      setOrder(0);
    } catch (error) {
      alert('Erro ao criar mapa.')
    }
  }

  return (
    <>
      <Head>
        <title>Dashboard DevLândia | Criação de mapas</title>
      </Head>
      <div className="flex w-full h-screen overflow-auto">
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
                  />
                  <InputWithLabel 
                    label="Descrição" 
                    name="description" 
                    value={description}
                    onChange={(evt) => setDescription(evt.target.value)}
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
