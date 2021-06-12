import AuthButton from 'components/AuthButton'
import Logo from 'components/Logo'
import Link from 'next/link'
import { ToastContainer } from 'react-toastify'
import styles from './styles'

export default function Form ({ handleSubmit, onChange, disabled, buttonText }) {
  const toPath = {
    'Iniciar Sesion': {
      link: '/register',
      text: 'Registrate'
    },
    Registrarse: {
      link: '/login',
      text: 'Inicia Sesion'
    }
  }
  return (
    <>
      <section>
        <form>
          <h1>{buttonText}</h1>
          <Logo />
          <p>Tu app de recetas digitales favorita</p>
          <label>Correo</label>
          <input onChange={onChange.email} type="email" />
          <label>Contraseña</label>
          <input onChange={onChange.password} type="password" />

          <AuthButton disabled={disabled} onClick={handleSubmit}>
            {buttonText}
          </AuthButton>
          <div>
            <p>
              {buttonText === 'Iniciar Sesion' ? 'Aun no ' : 'Ya '}tienes una
              cuenta?{' '}
              <Link href={toPath[buttonText].link}>
                <a>{toPath[buttonText].text}</a>
              </Link>
            </p>
          </div>
          <ToastContainer />
        </form>
      </section>
      <style jsx>{styles}</style>
    </>
  )
}
