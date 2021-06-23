import AppButton from 'components/Buttons/AppButton'
import Delete from 'components/Icons/Delete'
import useInputGroup from 'hooks/useInputGroup'

export default function IngredientsForm ({ ingredients, setIngredients }) {
  const [handleAdd, handleDelete, handleUpdate] = useInputGroup(
    ingredients,
    setIngredients
  )

  return (
    <>
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
              onChange={(e) => handleUpdate(e, ingredients.indexOf(ingredient))}
            />
          </div>
        )
      })}
      <AppButton onClick={handleAdd} disabled={false} type="primary">
        AGREGAR
      </AppButton>
      <style jsx>{`
        * {
          font-family: 'Montserrat';
          font-weight: 600;
        }

        .ingredients > :global(svg) {
          margin-top: 1em;
          cursor: pointer;
        }

        .ingredients > :global(input) {
          margin-left: 1em;
          width: 100%;
        }
        .ingredients {
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        label {
          color: var(--orange);
          margin-top: 1.5em;
        }
        div {
          display: flex;
          justify-content: center;
        }

        input {
          background-color: transparent;
          border: 0;
          border-bottom: 2px solid var(--black);
          font-size: 0.9em;
          margin-top: 1em;
        }

        input:focus {
          outline: none;
          border-bottom: 2px solid var(--orange);
        }
      `}</style>
    </>
  )
}
