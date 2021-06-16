import AppButton from 'components/AppButton'
import Cookbook from 'components/Cookbook'
import FourCharacters from 'components/Icons/FourCharacters'
import Logo from 'components/Icons/Logo'

export default function AddCookbook () {
  return (
    <>
      <section>
        <div>
          <Logo />
        </div>
        <p>Crea un libro de cocina a selecciona uno :)</p>
        {/* TODO* We must fetch all the cookbooks here */}
        <div>
          <div className="cookbooks">
            <Cookbook name="Libro de cocina 1" />
            <Cookbook name="Libro de cocina 2" />
            <Cookbook name="Libro de cocina 3" />
            <Cookbook name="Libro de cocina 4" />
            <Cookbook name="Libro de cocina 5" />
            <Cookbook name="Libro de cocina 6" />
          </div>
        </div>
        <div>
          <AppButton onClick={() => {}} type="primary">
            NUEVO LIBRO DE COCINA
          </AppButton>
        </div>
      </section>
      <section className="second_page">
        <FourCharacters />
      </section>
      <style jsx>{`
        .blur_background {
          position: absolute;
          backdrop-filter: blur(5px);
          margin-top: 1em;
          margin-bottom: 1em;
          width: 30em;
          height: 70%;
        }

        .cookbooks {
          align-items: center;
          display: flex;
          flex-direction: column;
        }

        .second_page {
          align-items: center;
          background-color: var(--blue);
          display: flex;
          justify-content: center;
          margin: 0;
        }

        div {
          display: flex;
          justify-content: center;
        }

        section > :global(svg) {
          fill: red;
        }

        p {
          padding: 1em;
          font-size: 0.9em;
          font-weight: 600;
          color: var(--gray);
          margin: 0;
        }

        section {
          margin-top: 2em;
        }
      `}</style>
    </>
  )
}
