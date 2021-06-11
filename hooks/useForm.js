import { useState } from 'react'

export default function useForm () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onChange = {
    email: (e) => setEmail(e.target.value),
    password: (e) => setPassword(e.target.value)
  }
  return { form: { email, password }, onChange }
}
