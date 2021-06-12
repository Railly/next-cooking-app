import AuthLayout from 'components/AuthLayout'
import BrowseLayout from 'components/BrowseLayout'
import LandingLayout from 'components/LandingLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  const { pathname } = useRouter()

  const browsePages = {
    '/browse': 'Browse'
  }

  const authPages = {
    '/register': 'Registro',
    '/login': 'Iniciar Sesion'
  }

  const landingPages = {
    '/': 'Home',
    '/services': 'Servicios',
    '/pricing': 'Precios'
  }

  return (
    <>
      <Head>
        <title>
          Foody -
          {landingPages[pathname] ||
            authPages[pathname] ||
            browsePages[pathname]}
        </title>
        <meta
          name="description"
          content="Tu app de recetas digitales favorita"
        />
        <link rel="icon" href="/favicon-foody.ico" />
      </Head>
      {landingPages[pathname] && (
        <>
          <LandingLayout />
          <Component {...pageProps} />
        </>
      )}
      {authPages[pathname] && (
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      )}
      {browsePages[pathname] && (
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 25fr 45fr' }}>
          <BrowseLayout />
          <Component {...pageProps} />
        </div>
      )}
    </>
  )
}

export default MyApp
