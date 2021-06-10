import AuthLayout from 'components/AuthLayout'
import LandingLayout from 'components/LandingLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  const { pathname } = useRouter()

  const appPages = {
    '/register': 'Registro'
  }

  const landingPages = {
    '/': 'Home',
    '/services': 'Servicios',
    '/pricing': 'Precios'
  }

  return (
    <>
      <Head>
        <title>Foody - {landingPages[pathname] || appPages[pathname]}</title>
        <meta
          name="description"
          content="Tu app de recetas digitales favorita"
        />
        <link rel="icon" href="/favicon-foody.ico" />
      </Head>
      {landingPages[pathname]
        ? (
        <>
          <LandingLayout />
          <Component {...pageProps} />
        </>
          )
        : (
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
          )}
    </>
  )
}

export default MyApp
