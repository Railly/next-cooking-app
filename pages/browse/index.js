import AuthButton from 'components/AuthButton'
import useUser from 'hooks/useUser'

export default function App () {
  return (
    <>
      <h1>App</h1>
      <AuthButton onClick={() => {}} type="primary">
        Cerrar Sesion
      </AuthButton>
    </>
  )
}
