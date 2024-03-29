import { onAuthStateChanged } from 'firebase/client'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { re } from 'utils/dictionary'

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined
}

export default function useUser () {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(setUser)
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (!re.test(router.pathname)) {
      user !== USER_STATES.NOT_LOGGED && user && router.push('/browse')
    } else {
      user === USER_STATES.NOT_LOGGED && router.push('/login')
    }
  }, [user])

  return user
}
