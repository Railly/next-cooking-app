function fn (valor) {
  function a () {
    valor++
  }
  return [valor, a]
}

const [a, b, c] = fn()

const [contador, setContador] = useState(1)

console.log(a, b, c)
