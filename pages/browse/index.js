import AppButton from 'components/Buttons/AppButton'
import Cookbook from 'components/Cookbook'
import FourCharacters from 'components/Icons/FourCharacters'
import Logo from 'components/Icons/Logo'
import Modal from 'components/Modal'
import { listenLatestDevits } from 'firebase/client'
import useUser, { USER_STATES } from 'hooks/useUser'
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
    user && listenLatestDevits(user.uid, setCookbooks)
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
              console.log(cookbook)
              return <Cookbook key={cookbook.id} {...cookbook} />
            })}
            <AppButton onClick={toggleModal} type="primary">
              NUEVO LIBRO DE COCINA
            </AppButton>
          </div>
        )}
      </section>
      <section className="second_page">
        <FourCharacters />
      </section>
      <Modal toggleModal={toggleModal} isOpen={isOpen} />
      <style jsx>
        {`
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

          section > :global(svg) {
            fill: red;
          }

          p {
            padding: 1em;
            font-size: 0.9em;
            font-weight: 600;
            color: var(--gray);
            margin: 0;
          }

          section {
            margin-top: 2em;
          }
        `}
      </style>
    </>
  )
}
