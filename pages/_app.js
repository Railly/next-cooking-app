import NavBar from 'components/NavBar'
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  const { pathname } = useRouter()

  const pagesName = {
    '/': 'Home',
    '/services': 'Servicios',
    '/pricing': 'Precios'
  }

  return (
    <>
      <Head>
        <title>Foody - {pagesName[pathname]}</title>
        <meta
          name="description"
          content="Tu app de recetas digitales favorita"
        />
        <link rel="icon" href="/favicon-foody.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
