import AuthButton from 'components/AuthButton'
import Logo from 'components/Logo'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { signInWithEmailPassword } from 'firebase/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useCustomToast from 'hooks/useCustomToast'
import useUser, { USER_STATES } from 'hooks/useUser'
import validateEmail from 'utils/validateEmail'
import useForm from 'hooks/useForm'

export default function Login () {
  const user = useUser()
  const [disabled, setDisabled] = useState(false)
  const router = useRouter()
  const { form, onChange } = useForm()
  const { toastLoginEmailError, toastLoginAuthError } = useCustomToast(
    setDisabled
  )

  const handleClick = (e) => {
    e.preventDefault()
    setDisabled(true)
    if (validateEmail(form.email)) {
      signInWithEmailPassword(form.email, form.password)
        .then((userCredential) => {
          console.log(userCredential)
          router.replace('/app')
        })
        .catch(toastLoginAuthError)
    } else {
      toastLoginEmailError()
    }
  }

  return (
    <>
      {user === USER_STATES.NOT_KNOWN && <h1>Cargando</h1>}
      {user === USER_STATES.NOT_LOGGED && (
        <>
          <section>
            <form>
              <Logo />
              <p>Tu app de recetas digitales favorita</p>
              <label>Correo</label>
              <input onChange={onChange.email} type="email" />
              <label>Contraseña</label>
              <input onChange={onChange.password} type="password" />
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
      )}
    </>
  )
}
