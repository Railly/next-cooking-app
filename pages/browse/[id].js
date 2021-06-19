import Cookbook from 'components/Cookbook'

export default function CookbookPage (props) {
  console.log(props)
  return (
    <>
      <Cookbook {...props} />
      <style jsx>{''}</style>
    </>
  )
}

CookbookPage.getInitialProps = (context) => {
  const { query, res } = context
  const { id } = query

  return fetch(`http://localhost:3000/api/cookbooks/${id}`).then(
    (apiReponse) => {
      if (apiReponse.ok) return apiReponse.json()
      if (res) {
        res.writeHead(400).end()
      }
    }
  )
}
