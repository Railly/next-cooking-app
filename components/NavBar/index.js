import BurguerMenu from 'components/BurguerMenu'
import Logo from 'components/Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { device } from 'styles/devices'

export default function NavBar () {
  const { pathname } = useRouter()
  const [open, setOpen] = useState(false)
  const currentPage = (path) => {
    return pathname === path ? 'current_page' : ''
  }
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <nav>
        <ul>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <div>
            <li>
              <Link href="/">
                <a onClick={handleClick} className={currentPage('/')}>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a onClick={handleClick} className={currentPage('/services')}>
                  Servicios
                </a>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <a onClick={handleClick} className={currentPage('/pricing')}>
                  Precios
                </a>
              </Link>
            </li>
          </div>
          <BurguerMenu onClick={handleClick} />
        </ul>
      </nav>
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
          justify-content: space-around;
          width: 80%;
        }

        nav {
          margin: 3em;
        }

        ul > :global(svg) {
          display: none;
        }

        .current_page {
          color: #ff6961;
        }

        @media ${device.mobileL} {
          ul > :global(svg) {
            display: block;
            margin-left: 2em;
          }

          div {
            position: absolute;
            display: block;
            top: 0;
            left: 0;
            padding: 1.8em;
            background-color: var(--orange);
            height: 100vh;
            width: 50%;
            transform: ${open ? 'translateX(0px)' : 'translateX(-300px)'};
            transition: 0.5s ease-in-out;
          }

          ul {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100vw;
          }

          li {
            border-bottom: 1px solid var(--white);
            padding: 1em;
            margin-top: 5em;
          }
          .current_page {
            color: var(--white);
          }
          nav {
            display: flex;
            align-items: center;
          }
        }
      `}</style>
    </>
  )
}
