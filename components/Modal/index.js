import AppButton from 'components/Buttons/AppButton'
import { addCookbook } from 'firebase/client'
import useUser from 'hooks/useUser'
import { useState } from 'react'

const COOKBOOK_STATES = {
  NOT_KNOWN: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1
}

export default function Modal ({ toggleModal, isOpen }) {
  const user = useUser()
  const [cookbookName, setCookbookName] = useState(null)
  const [status, setStatus] = useState(COOKBOOK_STATES.NOT_KNOWN)

  const handleOnChange = (e) => {
    e.preventDefault()
    setCookbookName(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    setStatus(COOKBOOK_STATES.LOADING)
    toggleModal()
    addCookbook({ name: cookbookName, userId: user.uid })
      .then(() => {
        setStatus(COOKBOOK_STATES.SUCCESS)
      })
      .catch((e) => {
        setStatus(COOKBOOK_STATES.ERROR)
        console.error(e)
      })
  }

  return (
    <>
      <div className="blur_background"></div>
      <div className="modal_container">
        <div className="modal">
          <label>Nombre del libro de cocina</label>
          <input type="text" onChange={handleOnChange} />
          <AppButton
            onClick={handleClick}
            type="primary"
            disabled={status === COOKBOOK_STATES.LOADING}
          >
            ACEPTAR
          </AppButton>
          <AppButton onClick={toggleModal} type="cancel">
            CANCELAR
          </AppButton>
        </div>
      </div>
      <style jsx>{`
        .modal {
          align-items: center;
          background-color: var(--white);
          border-radius: 10px;
          box-shadow: 2px 1px 37px -14px rgba(0, 0, 0, 0.34);
          -webkit-box-shadow: 2px 1px 37px -14px rgba(0, 0, 0, 0.34);
          -moz-box-shadow: 2px 1px 37px -14px rgba(0, 0, 0, 0.34);
          display: ${isOpen ? 'flex' : 'none'};
          flex-direction: column;
          height: 25em;
          justify-content: center;
          width: 40em;
        }
        .modal_container {
          align-items: center;
          display: ${isOpen ? 'flex' : 'none'};
          height: 100vh;
          justify-content: center;
          position: absolute;
          width: 100vw;
        }

        .blur_background {
          backdrop-filter: blur(5px);
          background-color: #ffffff55;
          display: ${isOpen ? '' : 'none'};
          height: 100vh;
          position: absolute;
          width: 100vw;
        }

        input {
          font-size: 1em;
          margin: 1.5em 0;
          border: 1px solid var(--gray);
        }

        input:focus {
          outline: none;
          box-shadow: 0 0 1px 1px var(--orange);
        }
      `}</style>
    </>
  )
}
