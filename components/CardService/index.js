import LandingButton from 'components/Buttons/LandingButton'

const content = {
  cookbook: {
    title: 'Crea recetas',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin leo ut libero imperdiet, nec laoreet nibh varius. Cras dictum nibh nibh, id venenatis leo hendrerit et. Nam cursus turpis id ligula egestas vulputate.'
  },
  recipe: {
    title: 'Organiza tus comidas',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin leo ut libero imperdiet, nec laoreet nibh varius. Cras dictum nibh nibh, id venenatis leo hendrerit et. Nam cursus turpis id ligula egestas vulputate.'
  },
  share: {
    title: 'Comparte con tus amigos',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin leo ut libero imperdiet, nec laoreet nibh varius. Cras dictum nibh nibh, id venenatis leo hendrerit et. Nam cursus turpis id ligula egestas vulputate.'
  }
}

export default function CardService ({ service }) {
  return (
		<>
      <section>
        <header>
          <p>Image</p>
          <h1>{content[service].title}</h1>
        </header>
        <main>
          <p>{content[service].description}</p>
          <LandingButton type="secondary" toPath="/">Saber mas</LandingButton>
        </main>
      </section>
			<style jsx>{`
        .gray {
          font-weight: 500;
          font-size: 80%;
          color: #999;
        }

        main {
          padding: 0 2rem;
        }

        header, main {
          display: flex;
          width: 25rem;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        section {
          background-color: #eee;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 25rem;
          border: 1px solid var(--yellow);
          padding: 3rem;
          box-shadow: 1px 7px 60px -19px rgba(234,113,113,0.54);
          -webkit-box-shadow: 1px 7px 60px -19px rgba(234,113,113,0.54);
          -moz-box-shadow: 1px 7px 60px -19px rgba(234,113,113,0.54);
        }
        li::marker {
          color: #aaa;
        }
			`}</style>
    </>
  )
}
