import { onAuthStateChanged } from 'firebase/client'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined
}

export default function useUser () {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED
      ? router.push('/login')
      : user && router.push('/app')
  }, [user])

  return user
}
