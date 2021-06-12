import AuthButton from 'components/AuthButton'
import { signOut } from 'firebase/client'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'

export default function App () {
  const user = useUser()
  const router = useRouter()

  const handleClick = () => {
    signOut().then(() => {})
  }

  return (
    <>
      {!user
        ? (
        <h1>Cargando</h1>
          )
        : (
        <>
          <h1>App</h1>
          <AuthButton onClick={handleClick} type="primary">
            Cerrar Sesion
          </AuthButton>
        </>
          )}
    </>
  )
}
