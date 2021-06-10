import Logo from 'components/Logo'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  const { pathname } = useRouter()

  const pagesName = {
    '/': 'Home',
    '/services': 'Servicios',
    '/pricing': 'Precios'
  }
  const currentPage = (path) => {
    return pathname === path ? 'current_page' : ''
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
      <nav>
        <ul>
          <li>
            <Logo />
          </li>
          <div>
            <li>
              <Link href="/">
                <a className={currentPage('/')}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a className={currentPage('/services')}>Servicios</a>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <a className={currentPage('/pricing')}>Precios</a>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
      <Component {...pageProps} />
      <style jsx>{`
        li {
          list-style: none;
          display: flex;
          align-items: center;
        }

        ul {
          display: flex;
        }

        div {
          display: flex;
          justify-content: space-evenly;
          width: 50%;
        }

        nav {
          margin: 3em;
        }

        .current_page {
          color: #ff6961;
        }
      `}</style>
    </>
  )
}

export default MyApp
