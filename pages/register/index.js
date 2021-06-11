import AuthButton from 'components/AuthButton'
import Logo from 'components/Logo'
import { signUpWithEmailPassword } from 'firebase/client'
import useCustomToast from 'hooks/useCustomToast'
import useForm from 'hooks/useForm'
import { useRouter } from 'next/router'
import { useState } from 'react'
import validateEmail from 'utils/validateEmail'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export default function Register () {
  const router = useRouter()
  const [disabled, setDisabled] = useState(false)
  const { form, onChange } = useForm()
  const { toastEmailError, toastAuthError } = useCustomToast(setDisabled)

  const handleSubmit = (e) => {
    e.preventDefault()
    setDisabled(true)

    if (validateEmail(form.email)) {
      signUpWithEmailPassword(form.email, form.password)
        .then((userCredential) => {
          console.log(userCredential)
          router.replace('/login')
        })
        .catch(toastAuthError)
    } else {
      toastEmailError()
    }
  }

  return (
    <>
      <section>
        <form>
          <Logo />
          <p>Tu app de recetas digitales favorita</p>
          <label>Correo</label>
          <input onChange={onChange.email} type="email" />
          <label>Contraseña</label>
          <input onChange={onChange.password} type="password" />
          <AuthButton disabled={disabled} onClick={handleSubmit}>
            Registrarse
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
