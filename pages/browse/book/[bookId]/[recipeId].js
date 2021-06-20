export default function RecipePage (props) {
  return (
    <>
      <h1>{props.bookId}</h1>
      <h1>{props.recipeId}</h1>
    </>
  )
}

export async function getServerSideProps (context) {
  const { params, res } = context
  const { bookId, recipeId } = params
  console.log(bookId, recipeId)
  return { props: { bookId, recipeId } }

  // const apiReponse = await fetch(
  // `http://localhost:3000/api/cookbooks/${bookId}`
  // )

  // if (apiReponse.ok) {
  // const props = await apiReponse.json()
  // return { props }
  // }

  // if (res) {
  // res.writeHead(400).end()
  // }
}
