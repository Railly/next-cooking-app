import { toast } from 'react-toastify'

export default function useCustomToast (setDisabled) {
  const toastHandlerLogin = {
    'auth/user-not-found': {
      message: 'Correo no registrado',
      toastId: 'USER_NOT_REGISTERED'
    },
    'auth/wrong-password': {
      message: 'Contraseña y/o usuario incorrectos',
      toastId: 'WRONG_PASSWORD'
    },
    'auth/too-many-requests': {
      message: 'Demasiados intentos, vuelva mas tarde',
      toastId: 'TOO_MANY_REQUESTS'
    },
    position: toast.POSITION.TOP_LEFT,
    duration: 2500,
    callback: () => setDisabled(false)
  }

  const toastLoginAuthError = (err) => {
    toast.error(toastHandlerLogin[err.code].message, {
      toastId: toastHandlerLogin[err.code].toastId,
      position: toastHandlerLogin.position,
      autoClose: toastHandlerLogin.duration,
      onClose: toastHandlerLogin.callback
    })
  }

  const toastLoginEmailError = () => {
    toast.error('Email invalido!!', {
      toastId: 'INVALID_EMAIL',
      position: toastHandlerLogin.position,
      autoClose: toastHandlerLogin.duration,
      onClose: toastHandlerLogin.callback
    })
  }
  return { toastLoginEmailError, toastLoginAuthError }
}
