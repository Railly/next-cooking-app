import AuthLayout from 'components/Layouts/AuthLayout'
import BrowseLayout from 'components/Layouts/BrowseLayout'
import LandingLayout from 'components/Layouts/LandingLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../styles/globals.css'

export const BROWSE_PAGES = {
  '/browse': 'Navegar',
  '/browse/add-cookbook': 'Nuevo Libro',
  '/browse/search': 'Buscar',
  '/browse/planner': 'Planeador',
  '/browse/settings': 'Configuracion',
  '/browse/feedback': 'Sugerencias'
}

const AUTH_PAGES = {
  '/register': 'Registro',
  '/login': 'Iniciar Sesion'
}

const LANDING_PAGES = {
  '/': 'Home',
  '/services': 'Servicios',
  '/pricing': 'Precios'
}

function MyApp ({ Component, pageProps }) {
  const { pathname } = useRouter()

  return (
    <>
      <Head>
        <title>
          Foody -{' '}
          {LANDING_PAGES[pathname] ||
            AUTH_PAGES[pathname] ||
            BROWSE_PAGES[pathname]}
        </title>
        <meta
          name="description"
          content="Tu app de recetas digitales favorita"
        />
        <link rel="icon" href="/favicon-foody.ico" />
      </Head>
      {LANDING_PAGES[pathname] && (
        <>
          <LandingLayout />
          <Component {...pageProps} />
        </>
      )}
      {AUTH_PAGES[pathname] && (
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      )}
      {BROWSE_PAGES[pathname] && (
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 30fr 45fr' }}>
          <BrowseLayout />
          <Component {...pageProps} />
        </div>
      )}
    </>
  )
}

export default MyApp
