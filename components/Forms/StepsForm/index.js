import AppButton from 'components/Buttons/AppButton'
import Delete from 'components/Icons/Delete'
import useInputGroup from 'hooks/useInputGroup'

export default function StepsForm ({ steps, setSteps }) {
  const [handleAdd, handleDelete, handleUpdate] = useInputGroup(steps, setSteps)

  return (
    <>
      <label>Pasos</label>
      {steps.map((step, idx) => {
        return (
          <div className="steps" key={`step-${idx}`}>
            <Delete onClick={() => handleDelete(steps.indexOf(step))} />
            <input
              type="text"
              value={step.value || ''}
              onChange={(e) => handleUpdate(e, steps.indexOf(step))}
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

        .steps > :global(svg) {
          margin-top: 1em;
          cursor: pointer;
        }

        .steps > :global(input) {
          margin-left: 1em;
          width: 100%;
        }
        .steps {
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
