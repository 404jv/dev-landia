import Head from "next/head";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { Header } from "../../components/Header";
import { ToastContainer, toast } from "react-toastify";
import { Sidebar } from "../../components/Sidebar";

export default function CreateActivities() {
  return (
    <>
      <Head>
        <title>Dashboard DevLândia | Criação de atividades</title>
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
            <h1 className="text-gray-150 text-4xl font-medium">Criação de atividades</h1>
            <form className="mt-9 px-4">
              <div className="max-w-3xl w-full flex flex-col gap-4 mb-7">

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}