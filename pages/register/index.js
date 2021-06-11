import { signUpWithEmailPassword } from 'firebase/client'
import useCustomToast from 'hooks/useCustomToast'
import useForm from 'hooks/useForm'
import { useRouter } from 'next/router'
import { useState } from 'react'
import validateEmail from 'utils/validateEmail'
import 'react-toastify/dist/ReactToastify.css'
import useUser, { USER_STATES } from 'hooks/useUser'
import Form from 'components/Form'

export default function Register () {
  const user = useUser()
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
      {user === USER_STATES.NOT_KNOWN && <h1>Cargando</h1>}
      {user === USER_STATES.NOT_LOGGED && (
        <Form
          handleSubmit={handleSubmit}
          onChange={onChange}
          disabled={disabled}
          buttonText="Registrarse"
        />
      )}
    </>
  )
}
