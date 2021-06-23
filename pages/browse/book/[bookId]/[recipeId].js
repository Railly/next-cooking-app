import AppButton from 'components/Buttons/AppButton'
import IngredientsForm from 'components/Forms/IngredientsForm'
import StepsForm from 'components/Forms/StepsForm'
import Logo from 'components/Icons/Logo'
import { updateRecipe } from 'firebase/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { tranformToObj, tranformToStr } from 'utils/parsing'
import PreviewRecipe from 'components/PreviewRecipe'
import ImageForm from 'components/Forms/ImageForm'
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import Back from 'components/Icons/Back'

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3
}

export default function RecipePage (props) {
  const router = useRouter()
  const [disabled, setDisabled] = useState(false)
  const [title, setTitle] = useState(props.title)
  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
  const [task, setTask] = useState(null)
  const [img, setImg] = useState(props.img)
  console.log(task, 'task')

  useEffect(() => {
    if (task) {
      const onProgrees = () => {}
      const onError = () => {}
      const onComplete = () => {
        console.log('onComplete')
        task.snapshot.ref.getDownloadURL().then(setImg)
      }
      task.on('state_changed', onProgrees, onError, onComplete)
    }
  }, [task])

  const [ingredients, setIngredients] = useState(
    tranformToObj(props.ingredients)
  )
  const [steps, setSteps] = useState(tranformToObj(props.steps))

  const onChangeTitle = (e) => {
    e.preventDefault()
    setTitle(e.target.value)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    setDisabled(true)
    updateRecipe({
      title,
      img,
      ingredients: tranformToStr(ingredients),
      steps: tranformToStr(steps),
      recipeId: props.recipeId,
      bookId: props.bookId
    }).then(() => {
      toast.success('Receta actualizada exitosamente', {
        toastId: 'SUCCESS_UPDATE_RECIPE',
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2500,
        onClose: () => setDisabled(false)
      })
    })
  }

  const handleCancel = (e) => {
    e.preventDefault()
    router.back()
  }

  return (
    <>
      <section>
        <div className="back_container">
          <Back width={35} height={35} onClick={() => router.back()} />
        </div>
        <div>
          <Logo />
        </div>
        <p>Crea tu receta :)</p>
        <form>
          <label>Título</label>
          <input type="text" onChange={onChangeTitle} defaultValue={title} />
          <ImageForm
            drag={drag}
            setDrag={setDrag}
            setTask={setTask}
            img={img}
            setImg={setImg}
          />
          <IngredientsForm
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
          <StepsForm steps={steps} setSteps={setSteps} />
        </form>
        <div className="buttons_container">
          <AppButton onClick={handleUpdate} type="save" disabled={disabled}>
            Actualizar
          </AppButton>
          <AppButton onClick={handleCancel} type="cancel" disabled={disabled}>
            Cancelar
          </AppButton>
        </div>
      </section>
      <section className="second_page">
        <PreviewRecipe
          title={title}
          ingredients={ingredients}
          steps={steps}
          img={img}
        />
        <ToastContainer />
      </section>
      <style jsx>{`
        * {
          font-family: 'Montserrat';
          font-weight: 600;
        }

        div > :global(svg) {
          cursor: pointer;
        }

        .back_container {
          display: flex;
          justify-content: flex-start;
          padding-left: 2em;
        }

        form > :global(svg) {
          margin-top: 1em;
          cursor: pointer;
        }

        h3 {
          color: var(--gray);
          user-select: none;
        }

        .buttons_container {
          display: flex;
          justify-content: space-evenly;
          position: sticky;
          padding-bottom: 1em;
          bottom: 0;
          backdrop-filter: blur(5px);
          background-color: #ffffffaa;
          width: 100%;
        }

        .buttons_container > :global(button) {
          width: 10em;
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

        section {
          padding-top: 1em;
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
    const propsBD = await apiReponse.json()
    const props = {
      ...propsBD,
      bookId: bookId,
      recipeId: recipeId
    }

    return { props }
  }

  if (res) {
    res.writeHead(400).end()
  }
}
