import "../styles/global.css"
import 'react-toastify/dist/ReactToastify.min.css';
import type { AppProps } from 'next/app'
import { AuthProvider } from "../contexts/AuthContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
