import Head from "next/head";
import Router from "next/router";
import { useContext, useEffect } from "react"
import { Button } from "../../components/Form/Button";
import { InputWithLabel } from "../../components/Form/InputWithLabel";
import { Sidebar } from "../../components/Sidebar";
import { AuthContext } from "../../contexts/AuthContext";

export default function CreateMaps() {
  const { isAuthenticated } = useContext(AuthContext);
  
  useEffect(() => {
    if (!isAuthenticated) {
      Router.push('/');
    }
  }, [isAuthenticated])

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
            <form className="mt-9 px-4">
              <div className="flex gap-5 mb-7">
                <div className="flex flex-col gap-4">
                  <InputWithLabel label="Título" name="title" />
                  <InputWithLabel label="Descrição" name="description" />     
                </div>
                <InputWithLabel label="Ordem" name="order" type="number" />
              </div>

              <Button title="Criar Mapa" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
} 
