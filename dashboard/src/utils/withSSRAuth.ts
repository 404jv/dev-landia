import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { destroyCookie, parseCookies } from "nookies";

export function withSSRAuth<P>(fn: GetServerSideProps): GetServerSideProps {
  return async (context: GetServerSidePropsContext) => {
    const cookies = parseCookies(context);

    const token = cookies['dashboard-devlandia.token'];

    if(!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }

    try {
      return await fn(context)
    } catch (err) {
        destroyCookie(context, 'dashboard-devlandia.token');

        return {
          redirect: {
            destination: '/',
            permanent: false
          }
        }
    }
  }
}