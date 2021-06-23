export default function PreviewRecipe ({ title, ingredients, steps, img }) {
  console.log(ingredients.length)
  return (
    <>
      <p className="preview">VISTA PREVIA DE LA RECETA</p>
      <h1>{title}</h1>
      <section className="recipe_columns">
        {img && <img src={img} height={400} />}
        <ul>
          {ingredients.length !== 0 && <h2>Ingredientes</h2>}
          {ingredients.map((ingredient, idx) => (
            <li key={`ingredient-${idx}`}>{ingredient.value}</li>
          ))}
        </ul>
        <ol>
          {steps.length !== 0 && <h2>Pasos</h2>}
          {steps.map((step, idx) => (
            <li key={`step-${idx}`}>{step.value}</li>
          ))}
        </ol>
      </section>

      <style jsx>{`
        li {
          padding-bottom: 1em;
        }

        ul {
          grid-area: ingredients;
        }

        ol {
          grid-area: steps;
        }

        h2 {
          color: var(--orange);
        }

        img {
          grid-area: img;
          justify-self: center;
          border: 10px solid var(--light-blue);
          border-radius: 2em;
        }

        .recipe_columns {
          display: grid;
          grid-template-columns: 1fr 2fr;
          grid-template-areas:
            'img img'
            'ingredients steps';
        }

        .preview {
          font-size: 0.9em;
          font-weight: 600;
          color: var(--gray);
          margin: 0;
          display: inline-block;
          border-top: 1px solid var(--gray);
          border-bottom: 1px solid var(--gray);
          padding: 0.8em;
        }
      `}</style>
    </>
  )
}
