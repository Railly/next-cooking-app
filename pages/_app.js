import Logo from 'components/Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  const { pathname } = useRouter()
  return (
    <>
      <nav>
        <ul>
          <li>
            <Logo />
          </li>
          <div>
            <li>
              <Link href="/">
                <a className={pathname === '/' ? 'current_page' : ''}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a className={pathname === '/services' ? 'current_page' : ''}>
                  Servicios
                </a>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <a className={pathname === '/pricing' ? 'current_page' : ''}>
                  Precios
                </a>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
      <Component {...pageProps} />
      <style jsx>{`
        li {
          list-style: none;
        }

        ul {
          display: flex;
        }

        div {
          display: flex;
          justify-content: space-evenly;
          width: 50%;
        }

        .current_page {
          color: #ff6961;
        }
      `}</style>
    </>
  )
}

export default MyApp
