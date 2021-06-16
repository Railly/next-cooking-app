import Avatar from 'components/Avatar'
import Books from 'components/Icons/Books'
import BurguerMenu from 'components/Icons/BurguerMenu'
import Calendar from 'components/Icons/Calendar'
import Feedback from 'components/Icons/Feedback'
import Logout from 'components/Icons/Logout'
import Search from 'components/Icons/Search'
import Settings from 'components/Icons/Settings'
import useUser, { USER_STATES } from 'hooks/useUser'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { signOut } from 'firebase/client'
import { device } from 'styles/devices'

export default function BrowseLayout () {
  const user = useUser()
  const { pathname } = useRouter()
  const [open, setOpen] = useState(false)
  const currentPage = (path) => {
    return pathname === path ? 'current_page' : ''
  }
  const handleClick = () => {
    setOpen(!open)
  }

  const handleSignOut = () => {
    signOut().then(() => {})
  }

  return (
    <>
      <nav>
        <ul>
          {user === USER_STATES.NOT_KNOWN && <Avatar alt="photo template" />}
          {user && <Avatar alt={user.username} src={user.avatar} />}
          <div className="main_options">
            <li className={currentPage('/browse')}>
              <Link href="/browse">
                <a onClick={handleClick}>
                  <Books />
                </a>
              </Link>
            </li>
            <li className={currentPage('/browse/search')}>
              <Link href="/browse/search">
                <a onClick={handleClick}>
                  <Search />
                </a>
              </Link>
            </li>
            <li className={currentPage('/browse/planner')}>
              <Link href="/browse/planner">
                <a onClick={handleClick}>
                  <Calendar />
                </a>
              </Link>
            </li>
            <li className={currentPage('/browse/settings')}>
              <Link href="/browse/settings">
                <a onClick={handleClick}>
                  <Settings />
                </a>
              </Link>
            </li>
          </div>
          <div className="sec_options">
            <li className={currentPage('/browse/feedback')}>
              <Link href="/browse/feedback">
                <a onClick={handleClick}>
                  <Feedback />
                </a>
              </Link>
            </li>
            <li className="logout_icon" onClick={handleSignOut}>
              <Logout />
            </li>
          </div>
          <BurguerMenu onClick={handleClick} />
        </ul>
      </nav>
      <style jsx>{`
        li {
          list-style: none;
          display: flex;
          justify-content: center;
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 2.4em;
          width: 3.4em;
        }

        ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          padding: 0;
          margin: 0;
          width: 3.5em;
        }
        .logout_icon {
          cursor: pointer;
        }

        .main_options {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 13em;
        }

        .sec_options {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          height: 10em;
        }

        nav {
          display: flex;
          justify-content: center;
          background-color: var(--blue);
          height: 100vh;
        }

        ul > :global(svg) {
          display: none;
        }

        .current_page {
          background-color: #3875ab;
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
            background-color: red;
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
