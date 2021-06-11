import AuthButton from 'components/AuthButton'
import Logo from 'components/Logo'
import { signInWithEmailPassword } from 'firebase/client'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'

export default function Login () {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    const email = 'angelicarivasarana@gmail.com'
    const password = 'hunter123'
    signInWithEmailPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential)
        router.replace('/app')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <>
      <section>
        <form>
          <Logo />
          <p>Tu app de recetas digitales favorita</p>
          <label>Correo</label>
          <input type="email" />
          <label>Contraseña</label>
          <input type="password" />
          <AuthButton onClick={handleClick}>Iniciar Sesion</AuthButton>
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
