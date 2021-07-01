import AppButton from 'components/Buttons/AppButton'
import Back from 'components/Icons/Back'
import FourCharacters from 'components/Icons/FourCharacters'
import Logo from 'components/Icons/Logo'
import Recipe from 'components/Recipe'
import { addRecipe, deleteRecipe, listenLatestRecipes } from 'firebase/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function CookbookPage ({ user, id, name }) {
  const router = useRouter()
  const [recipes, setRecipes] = useState([])
  const [deleteMode, setDeleteMode] = useState(false)

  const handleAdd = () => {
    addRecipe({
      bookId: id,
      title: 'Nueva Receta',
      img: '',
      ingredients: '',
      steps: ''
    })
  }

  const toggleDeleteMode = () => {
    setDeleteMode(!deleteMode)
  }

  const handleDeleteRecipe = (e, recipeId) => {
    e.preventDefault()
    deleteRecipe({
      bookId: id,
      recipeId: recipeId
    })
      .then(() => {
        console.log('ez')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    let unsubscribe
    if (user) {
      unsubscribe = listenLatestRecipes(id, setRecipes)
    }
    return () => unsubscribe && unsubscribe()
  }, [user])

  return (
    <>
      <section>
        <div className="back_container">
          <Back width={35} height={35} onClick={() => router.back()} />
        </div>
        <div>
          <Logo />
        </div>
        <div className="recipes">
          <p>Crea un libro de cocina a selecciona uno :)</p>
          <h1>{name}</h1>
          {recipes &&
            recipes.map((recipe) =>
              deleteMode
                ? (
                <Recipe
                  key={recipe.id}
                  bookId={id}
                  onClick={(e) => handleDeleteRecipe(e, recipe.id)}
                  {...recipe}
                />
                  )
                : (
                <Recipe key={recipe.id} bookId={id} {...recipe} />
                  )
            )}
          <div className="button_container">
            {!deleteMode && (
              <AppButton onClick={handleAdd} type="primary">
                NUEVA RECETA
              </AppButton>
            )}
            <AppButton onClick={toggleDeleteMode} type="cancel">
              {deleteMode ? 'CANCELAR' : 'ELIMINAR RECETA'}
            </AppButton>
          </div>
        </div>
      </section>
      <section className="second_page">
        <FourCharacters />
      </section>
      <style jsx>{`
        div > :global(svg) {
          cursor: pointer;
        }

        .back_container {
          display: flex;
          justify-content: flex-start;
          padding-left: 2em;
        }

        .button_container {
          display: flex;
          flex-direction: column;
          align-items: center;
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

  const apiReponse = await fetch(`${process.env.HOST}/api/book/${bookId}`)

  if (apiReponse.ok) {
    const props = await apiReponse.json()
    return { props }
  }

  if (res) {
    res.writeHead(400).end()
  }
}
