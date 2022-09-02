import Head from "next/head";
import Router from "next/router";
import { useContext, useEffect } from "react"
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

        </div>
      </div>
    </>
  )
} 
