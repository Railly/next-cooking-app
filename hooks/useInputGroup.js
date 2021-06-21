export default function useInputGroup (elements, callback) {
  const handleAdd = (e) => {
    e.preventDefault()
    const newElements = [...elements]
    newElements.push({ value: '' })
    callback(newElements)
  }

  const handleDelete = (index) => {
    const newElements = [...elements]
    newElements.splice(index, 1)
    callback(newElements)
  }

  const handleUpdate = (e, index) => {
    const newElements = [...elements]
    newElements[index].value = e.target.value
    callback(newElements)
  }

  return [handleAdd, handleDelete, handleUpdate]
}
