import Delete from 'components/Icons/Delete'
import upload from 'public/upload.svg'
import { uploadImage } from 'firebase/client'

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3
}

export default function ImageForm ({ setDrag, setTask, img, setImg, drag }) {
  const handleDragEnter = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
    const file = e.dataTransfer.files[0]
    const task = uploadImage(file)
    setTask(task)
  }

  const handleRemoveImage = (e) => {
    e.preventDefault()
    setImg(null)
  }
  return (
    <>
      <label>Imagen</label>
      {img
        ? (
        <>
          <Delete onClick={handleRemoveImage} />
          <img className="img_thumbnail" src={img} width={300} />
        </>
          )
        : (
        <>
          <div
            className="img_container"
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          ></div>
        </>
          )}
      <style jsx>{`
        label {
          color: var(--orange);
          margin-top: 1.5em;
        }

        .img_thumbnail {
          grid-area: img;
          justify-self: center;
          border: 10px solid var(--light-blue);
          border-radius: 2em;
          margin-top: 1em;
        }

        .img_container {
          background-image: url(${upload.src});
          background-position: center center;
          background-size: 60% 60%;
          background-repeat: no-repeat;
          border: ${
            drag === DRAG_IMAGE_STATES.DRAG_OVER
              ? '3px dashed var(--orange)'
              : '3px dashed var(--gray)'
          };
          display: flex;
          justifmg
          y-content: center;
          align-items: center;
          border-radius: 10px;
          font-size: 21px;
          min-height: 200px;
          outline: 0;
          margin-top: 1em;
          width: 100%;
        }
      `}</style>
    </>
  )
}
