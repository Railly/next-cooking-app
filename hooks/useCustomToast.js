import { toast } from 'react-toastify'

export default function useCustomToast (setDisabled) {
  const toastHandler = {
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
    'auth/email-already-in-use': {
      message: 'Este correo ya ha sido registrado',
      toastId: 'USER_ALREADY_EXISTS'
    },
    'auth/weak-password': {
      message: 'La contraseña debe tener mas de 6 caracteres',
      toastId: 'TOO_SHORT_PASSWORD'
    },
    'auth/argument-error': {
      message: 'Debe completar ambos campos',
      toastId: 'ARGUMENT_ERROR'
    },
    position: toast.POSITION.TOP_LEFT,
    duration: 2500,
    callback: () => setDisabled(false)
  }

  const toastAuthError = (err) => {
    console.error(err.code)
    toast.error(toastHandler[err.code].message, {
      toastId: toastHandler[err.code].toastId,
      position: toastHandler.position,
      autoClose: toastHandler.duration,
      onClose: toastHandler.callback
    })
  }

  const toastEmailError = () => {
    toast.error('Email invalido!!', {
      toastId: 'INVALID_EMAIL',
      position: toastHandler.position,
      autoClose: toastHandler.duration,
      onClose: toastHandler.callback
    })
  }
  return { toastEmailError, toastAuthError }
}
