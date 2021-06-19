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

export async function getServerSideProps (context) {
  const { params, res } = context
  const { id } = params

  const apiReponse = await fetch(`http://localhost:3000/api/cookbooks/${id}`)

  if (apiReponse.ok) {
    const props = await apiReponse.json()
    return { props }
  }

  if (res) {
    res.writeHead(400).end()
  }
}
