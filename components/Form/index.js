import AuthButton from 'components/AuthButton'
import Logo from 'components/Logo'
import { ToastContainer } from 'react-toastify'
import styles from './styles'

export default function Form ({ handleSubmit, onChange, disabled, buttonText }) {
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
            {buttonText}
          </AuthButton>
          <ToastContainer />
        </form>
      </section>
      <style jsx>{styles}</style>
    </>
  )
}
