import Head from "next/head";
import { Sidebar } from "../../components/Sidebar";

export default function Maps() {
  return (
    <>
      <Head>
        <title>Dashboard DevLândia | Listagem de mapas</title>
      </Head>
      <div className="flex w-full h-screen overflow-auto">
        <Sidebar />
      </div>
    </>
  )
}