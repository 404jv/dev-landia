import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies } from "nookies";

export function withSSRGuest<P>(fn: GetServerSideProps<P>): GetServerSideProps {
  return async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
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