import AppButton from 'components/Buttons/AppButton'
import FourCharacters from 'components/Icons/FourCharacters'
import Logo from 'components/Icons/Logo'
import Recipe from 'components/Recipe'
import { listenLatestRecipes } from 'firebase/client'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function CookbookPage (props) {
  const user = useUser()
  const router = useRouter()
  const [recipes, setRecipes] = useState([])

  const handleClick = () => {
    router.push('/browse/create-recipe')
  }

  useEffect(() => {
    user && listenLatestRecipes(props.id, setRecipes)
  }, [user])

  return (
    <>
      <section>
        <div>
          <Logo />
        </div>
        <div className="recipes">
          <p>Crea un libro de cocina a selecciona uno :)</p>
          <h1>{props.name}</h1>
          {recipes &&
            recipes.map((recipe) => (
              <Recipe key={recipe.id} bookId={props.id} {...recipe} />
            ))}
          <div className="button_container">
            <AppButton onClick={handleClick} type="primary">
              NUEVO LIBRO DE COCINA
            </AppButton>
          </div>
        </div>
      </section>
      <section className="second_page">
        <FourCharacters />
      </section>
      <style jsx>{`
        .button_container {
          position: sticky;
          padding-bottom: 1em;
          bottom: 0;
          backdrop-filter: blur(5px);
          background-color: #ffffff11;
          width: 100%;
        }

        .second_page {
          align-items: center;
          background-color: var(--blue);
          display: flex;
          justify-content: center;
          margin: 0;
        }

        .recipes {
          align-items: center;
          display: flex;
          flex-direction: column;
        }

        section {
          padding-top: 2em;
          overflow-y: auto;
          height: 100vh;
          position: relative;
        }

        p {
          padding: 1em;
          font-size: 0.9em;
          font-weight: 600;
          color: var(--gray);
          margin: 0;
        }

        div {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  )
}

export async function getServerSideProps (context) {
  const { params, res } = context
  const { bookId } = params

  const apiReponse = await fetch(`http://localhost:3000/api/book/${bookId}`)

  if (apiReponse.ok) {
    const props = await apiReponse.json()
    return { props }
  }

  if (res) {
    res.writeHead(400).end()
  }
}
