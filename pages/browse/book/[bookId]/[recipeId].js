export default function RecipePage (props) {
  console.log(props)
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

export async function getServerSideProps (context) {
  const { params, res } = context
  const { bookId, recipeId } = params
  console.log(bookId, recipeId)

  const apiReponse = await fetch(
    `http://localhost:3000/api/book/${bookId}/${recipeId}`
  )

  if (apiReponse.ok) {
    const props = await apiReponse.json()
    return { props }
  }

  if (res) {
    res.writeHead(400).end()
  }
}
