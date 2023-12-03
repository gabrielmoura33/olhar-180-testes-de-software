import GlobalStyle from '../styles/globals'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <GlobalStyle />
        <ToastContainer />
        <Component {...pageProps} />
      </UserProvider>
    </>
  )
}

export default MyApp
