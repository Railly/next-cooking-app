import AppButton from 'components/Buttons/AppButton'
import Cookbook from 'components/Cookbook'
import FourCharacters from 'components/Icons/FourCharacters'
import Logo from 'components/Icons/Logo'
import Modal from 'components/Modal'
import { listenLatestCookbooks } from 'firebase/client'
import useUser from 'hooks/useUser'
import { useEffect, useState } from 'react'

export default function App () {
  const user = useUser()
  const [isOpen, setIsOpen] = useState(false)
  const [cookbooks, setCookbooks] = useState([])

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    // user && fetchLatestCookbooks(user.uid).then(setCookbooks)
    user && listenLatestCookbooks(user.uid, setCookbooks)
  }, [user])

  return (
    <>
      <section>
        <div>
          <Logo />
        </div>
        <p>Crea un libro de cocina a selecciona uno :)</p>
        {!user && <h1>Cargando</h1>}
        {user && (
          <div className="cookbooks">
            {cookbooks.map((cookbook) => {
              return <Cookbook key={cookbook.id} {...cookbook} />
            })}
            <div className="button_container">
              <AppButton onClick={toggleModal} type="primary">
                NUEVO LIBRO DE COCINA
              </AppButton>
            </div>
          </div>
        )}
      </section>
      <section className="second_page">
        <FourCharacters />
      </section>
      <Modal toggleModal={toggleModal} isOpen={isOpen} />
      <style jsx>
        {`
          .button_container {
            position: sticky;
            padding-bottom: 1em;
            bottom: 0;
            backdrop-filter: blur(5px);
            background-color: #ffffff11;
            width: 100%;
          }

          .cookbooks {
            align-items: center;
            display: flex;
            flex-direction: column;
          }

          .second_page {
            align-items: center;
            background-color: var(--blue);
            display: flex;
            justify-content: center;
            margin: 0;
          }

          div {
            display: flex;
            justify-content: center;
          }

          p {
            padding: 1em;
            font-size: 0.9em;
            font-weight: 600;
            color: var(--gray);
            margin: 0;
          }

          section > :global(svg) {
            fill: red;
          }

          section {
            padding-top: 2em;
            overflow-y: auto;
            height: 100vh;
            position: relative;
          }
        `}
      </style>
    </>
  )
}
