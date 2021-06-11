const expressions = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

export default function validateEmail (email) {
  return expressions.email.test(email)
}
