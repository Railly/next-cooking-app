export const tranformToObj = (str) => {
  if (str === '') return []
  return JSON.parse(str).value.map((x) => {
    return { value: x }
  })
}

export const tranformToStr = (obj) =>
  JSON.stringify({
    value: obj.map((x) => x.value)
  })
