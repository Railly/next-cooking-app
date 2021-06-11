import AuthButton from 'components/AuthButton'
import Logo from 'components/Logo'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { signInWithEmailPassword } from 'firebase/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useCustomToast from 'hooks/useCustomToast'

export default function Login () {
  const router = useRouter()
  const [disabled, setDisabled] = useState(false)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const { toastLoginEmailError, toastLoginAuthError } = useCustomToast(
    setDisabled
  )

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    return re.test(email)
  }

  const handleClick = (e) => {
    e.preventDefault()
    setDisabled(true)
    if (validateEmail(email)) {
      signInWithEmailPassword(email, password)
        .then((userCredential) => {
          console.log(userCredential)
          router.replace('/app')
        })
        .catch(toastLoginAuthError)
    } else {
      toastLoginEmailError()
    }
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <>
      <section>
        <form>
          <Logo />
          <p>Tu app de recetas digitales favorita</p>
          <label>Correo</label>
          <input onChange={onChangeEmail} type="email" />
          <label>Contraseña</label>
          <input onChange={onChangePassword} type="password" />
          <AuthButton disabled={disabled} onClick={handleClick}>
            Iniciar Sesion
          </AuthButton>
          <ToastContainer />
        </form>
      </section>
      <style jsx>{`
        form > :global(svg) {
        }

        p {
          color: var(--gray);
          font-size: 0.8em;
          margin-bottom: 2em;
        }

        section {
          display: flex;
          justify-content: center;
          width: 80vw;
          margin: 3em 0;
          background-color: #fff;
        }

        input {
          margin: 1.5em 0;
          border: 1px solid var(--gray);
        }

        input:focus {
          outline: none;
          box-shadow: 0 0 1px 1px var(--orange);
        }

        form {
          background-color: var(--white);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          padding: 2em;
        }

        h1 {
          margin: 0;
        }
      `}</style>
    </>
  )
}
