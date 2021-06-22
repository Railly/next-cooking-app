export const tranformToObj = (str) =>
  JSON.parse(str).value.map((x) => {
    return { value: x }
  })

export const tranformToStr = (obj) =>
  JSON.stringify({
    value: obj.map((x) => x.value)
  })
