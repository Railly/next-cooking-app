import AuthButton from 'components/AuthButton'
import Logo from 'components/Logo'
import { signUpWithEmailPassword } from 'firebase/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Register () {
  const router = useRouter()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    return re.test(email)
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (validateEmail(email)) {
      signUpWithEmailPassword(email, password)
        .then((userCredential) => {
          console.log(userCredential)
          router.replace('/login')
        })
        .catch((err) => {
          console.error(err)
        })
    } else {
      console.log('Email no valido')
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
          <AuthButton onClick={handleClick}>Registrarse</AuthButton>
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
