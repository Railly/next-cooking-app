import AppButton from 'components/Buttons/AppButton'
import Delete from 'components/Icons/Delete'
import Logo from 'components/Icons/Logo'
import { useState } from 'react'

const obj =
  '{"value": ["100 gramos de chocolate cobertura semi amargo con leche", "100 gramos chocolate cobertura blanco", "Dulce de leche, nueces y almendras para rellenar a elección"]}'

const tranformToIngredients = (str) =>
  JSON.parse(str).value.map((x) => {
    return { value: x }
  })

export default function RecipePage (props) {
  const [title, setTitle] = useState(props.name)
  const [ingredients, setIngredients] = useState(tranformToIngredients(obj))

  const onChangeTitle = (e) => {
    e.preventDefault()
    setTitle(e.target.value)
  }

  const handleUpdatedIngredients = (e, index) => {
    const newIngredients = [...ingredients]
    newIngredients[index].value = e.target.value
    setIngredients(newIngredients)
  }

  const handleAddIngredient = (e) => {
    e.preventDefault()
    const newIngredients = [...ingredients]
    newIngredients.push({ value: '' })
    setIngredients(newIngredients)
  }

  const handleDelete = (index) => {
    const newIngredients = [...ingredients]
    newIngredients.splice(index, 1)
    setIngredients(newIngredients)
  }

  return (
    <>
      <section>
        <div>
          <Logo />
        </div>
        <p>Crea tu receta :)</p>
        <form>
          <label>Título</label>
          <input type="text" onChange={onChangeTitle} defaultValue={title} />
          <label>Imagen</label>
          <AppButton onClick={() => {}} disabled={false} type="primary">
            SUBIR IMAGEN
          </AppButton>
          <label>Ingredientes</label>
          {ingredients.map((ingredient, idx) => {
            return (
              <div className="ingredients" key={`ingredient-${idx}`}>
                <Delete
                  onClick={() => handleDelete(ingredients.indexOf(ingredient))}
                />
                <input
                  type="text"
                  value={ingredient.value || ''}
                  onChange={(e) =>
                    handleUpdatedIngredients(e, ingredients.indexOf(ingredient))
                  }
                />
              </div>
            )
          })}
          <AppButton
            onClick={handleAddIngredient}
            disabled={false}
            type="primary"
          >
            AGREGAR INGREDIENTE
          </AppButton>
        </form>
      </section>
      <section className="second_page">
        <p className="preview">VISTA PREVIA DE LA RECETA</p>
        <h1>{title}</h1>
        <ol>
          {ingredients.map((ingredient, idx) => (
            <li key={`ingredient-${idx}`}>{ingredient.value}</li>
          ))}
        </ol>
      </section>
      <style jsx>{`
        * {
          font-family: 'Montserrat';
          font-weight: 600;
        }
        .ingredients {
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .ingredients > :global(svg) {
          margin-top: 1em;
          cursor: pointer;
        }

        .ingredients > :global(input) {
          margin-left: 1em;
          width: 100%;
        }

        form {
          display: flex;
          padding-left: 2em;
          flex-direction: column;
          width: 80%;
        }

        label {
          color: var(--orange);
          margin-top: 1.5em;
        }

        input {
          border: 0;
          border-bottom: 2px solid var(--black);
          font-size: 0.9em;
          margin-top: 1em;
        }

        input:focus {
          outline: none;
          border-bottom: 2px solid var(--orange);
        }

        .second_page {
          border-left: 2px solid var(--light-gray);
          display: flex;
          align-items: center;
          flex-direction: column;
          margin: 0;
        }

        div {
          display: flex;
          justify-content: center;
        }

        p {
          padding-left: 2em;
          padding-top: 2em;
          font-size: 0.9em;
          font-weight: 600;
          color: var(--gray);
          margin: 0;
        }

        .preview {
          display: inline-block;
          border-top: 1px solid var(--gray);
          border-bottom: 1px solid var(--gray);
          padding: 0.8em;
        }

        section {
          padding-top: 2em;
          overflow-y: auto;
          height: 100vh;
          position: relative;
        }
      `}</style>
    </>
  )
}

export async function getServerSideProps (context) {
  const { params, res } = context
  const { bookId, recipeId } = params

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
