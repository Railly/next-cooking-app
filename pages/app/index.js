import AuthButton from 'components/AuthButton'
import { signOut } from 'firebase/client'
import { useRouter } from 'next/router'

export default function App () {
  const router = useRouter()
  const handleClick = () => {
    signOut().then(() => {
      console.log('Sign out successful')
      router.replace('/login')
    })
  }

  return (
    <>
      <h1>App</h1>
      <AuthButton onClick={handleClick}>Cerrar Sesion</AuthButton>
    </>
  )
}
