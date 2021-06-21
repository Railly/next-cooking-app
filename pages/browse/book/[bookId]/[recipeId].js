import AppButton from 'components/Buttons/AppButton'
import IngredientsForm from 'components/Forms/IngredientsForm'
import StepsForm from 'components/Forms/StepsForm'
import Logo from 'components/Icons/Logo'
import { useState } from 'react'

const ingredientsStr =
  '{"value": ["100 gramos de chocolate cobertura semi amargo con leche", "100 gramos chocolate cobertura blanco", "Dulce de leche, nueces y almendras para rellenar a elección"]}'

const stepsStr =
  '{"value": ["Derretir el chocolate a baño María a temperatura media. Es importante que el recipiente dónde está el chocolate no toque el agua!", "Mojar el molde con alcohol, para dar brillo y que no se adhiera el chocolate al molde. Colocar chocolate hasta la mitad. Incorporar una cucharadita de dulce de leche, almendras y nueces picadas a gusto. Llevar a la heladera por 40 minutos aproximadamente.", "Completar el resto del molde con chocolate, del mismo o diferente según el gusto de cada uno y colocar un trozo de almendras o nuez arriba para tener de referencia.", "Llevar a la heladera otros 40 minutos, desmoldar y disfrutar!"]}'

const tranformToObj = (str) =>
  JSON.parse(str).value.map((x) => {
    return { value: x }
  })

export default function RecipePage (props) {
  const [title, setTitle] = useState(props.name)
  const [ingredients, setIngredients] = useState(tranformToObj(ingredientsStr))
  const [steps, setSteps] = useState(tranformToObj(stepsStr))

  const onChangeTitle = (e) => {
    e.preventDefault()
    setTitle(e.target.value)
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
          <IngredientsForm
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
          <StepsForm steps={steps} setSteps={setSteps} />
        </form>
      </section>
      <section className="second_page">
        <p className="preview">VISTA PREVIA DE LA RECETA</p>
        <h1>{title}</h1>
        <section className="recipe_columns">
          <ul>
            <h2>Ingredientes</h2>
            {ingredients.map((ingredient, idx) => (
              <li key={`ingredient-${idx}`}>{ingredient.value}</li>
            ))}
          </ul>
          <ol>
            <h2>Pasos</h2>
            {steps.map((step, idx) => (
              <li key={`step-${idx}`}>{step.value}</li>
            ))}
          </ol>
        </section>
      </section>
      <style jsx>{`
        * {
          font-family: 'Montserrat';
          font-weight: 600;
        }

        li {
          padding-bottom: 1em;
        }

        .recipe_columns {
          display: grid;
          grid-template-columns: 1fr 2fr;
        }

        h2 {
          color: var(--orange);
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
