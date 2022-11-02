import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies } from "nookies";

export function withSSRGuest<P>(fn: GetServerSideProps): GetServerSideProps {
  return async (context: GetServerSidePropsContext) => {
    const cookies = parseCookies(context);

    if(cookies['dashboard-devlandia.token']) {
      return {
        redirect: {
          destination: '/maps/create',
          permanent: false
        }
      }
    }

    return await fn(context);
  }
}