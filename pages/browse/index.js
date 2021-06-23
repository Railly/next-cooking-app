import AppButton from 'components/Buttons/AppButton'
import Cookbook from 'components/Cookbook'
import FourCharacters from 'components/Icons/FourCharacters'
import Logo from 'components/Icons/Logo'
import Modal from 'components/Modal'
import { deleteCookbook } from 'firebase/client'
import { useState } from 'react'

export default function App ({ user, cookbooks }) {
  const [isOpen, setIsOpen] = useState(false)
  const [deleteMode, setDeleteMode] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const toggleDeleteMode = () => {
    setDeleteMode(!deleteMode)
  }

  const handleDeleteCookbook = (e, bookId) => {
    e.preventDefault()
    deleteCookbook({
      bookId: bookId
    })
  }

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
            {cookbooks &&
              cookbooks.map((cookbook) =>
                deleteMode
                  ? (
                  <Cookbook
                    key={cookbook.id}
                    bookId={cookbook.id}
                    onClick={(e) => handleDeleteCookbook(e, cookbook.id)}
                    {...cookbook}
                  />
                    )
                  : (
                  <Cookbook
                    key={cookbook.id}
                    bookId={cookbook.id}
                    {...cookbook}
                  />
                    )
              )}
            <div className="button_container">
              {!deleteMode && (
                <AppButton onClick={toggleModal} type="primary">
                  NUEVO LIBRO
                </AppButton>
              )}
              <AppButton onClick={toggleDeleteMode} type="cancel">
                {deleteMode ? 'CANCELAR' : 'ELIMINAR LIBRO'}
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
            display: flex;
            flex-direction: column;
            align-items: center;
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
