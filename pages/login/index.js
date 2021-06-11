import useUser, { USER_STATES } from 'hooks/useUser'
import { signInWithEmailPassword } from 'firebase/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useCustomToast from 'hooks/useCustomToast'
import validateEmail from 'utils/validateEmail'
import 'react-toastify/dist/ReactToastify.css'
import useForm from 'hooks/useForm'
import Form from 'components/Form'

export default function Login () {
  const user = useUser()
  const [disabled, setDisabled] = useState(false)
  const router = useRouter()
  const { form, onChange } = useForm()
  const { toastEmailError, toastAuthError } = useCustomToast(setDisabled)

  const handleSubmit = (e) => {
    e.preventDefault()
    setDisabled(true)
    if (validateEmail(form.email)) {
      signInWithEmailPassword(form.email, form.password)
        .then((userCredential) => {
          console.log(userCredential)
          router.replace('/app')
        })
        .catch(toastAuthError)
    } else {
      toastEmailError()
    }
  }

  return (
    <>
      {user === USER_STATES.NOT_KNOWN && <h1>Cargando</h1>}
      {user === USER_STATES.NOT_LOGGED && (
        <Form
          handleSubmit={handleSubmit}
          onChange={onChange}
          disabled={disabled}
          buttonText="Iniciar Sesion"
        />
      )}
    </>
  )
}
