import { GetServerSideProps } from "next";
import Head from "next/head";
import { Sidebar } from "../../components/Sidebar";
import { withSSRAuth } from "../../utils/withSSRAuth";

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

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (context) => {
  return {
    props: {}
  }
})