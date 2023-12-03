import Head from 'next/head'
import {
  AnimationContainer,
  SignContainer,
} from '../styles/pages/SignIn.module'
import Button from '../components/Button'
import SignAnimation from '../components/SignAnimation'

import Logo from '../components/Logo'

// import { useAuth } from '../context/Auth.context'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

import { getSession } from '@auth0/nextjs-auth0'

import { withApollo } from '../lib/withApollo'
function Home() {
  const router = useRouter()

  function handleLogin() {
    router.push('/api/auth/login')
  }

  return (
    <>
      <Head>
        <title>Olhar180 - Sistema de Lembretes</title>
      </Head>
      <SignContainer>
        <section className="form">
          <Logo />

          <form>
            <h1>Faça seu login</h1>
            <Button type="submit" onClick={handleLogin}>
              Acessar
            </Button>
          </form>
        </section>

        <AnimationContainer>
          <SignAnimation></SignAnimation>
        </AnimationContainer>
      </SignContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = await getSession(ctx.req, ctx.res)

  if (token) {
    return {
      redirect: {
        destination: '/tarefas',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

export default withApollo(Home)
