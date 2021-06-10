import Illustration from 'components/Illustration'
import Button from 'components/Button'
import Head from 'next/head'

export default function Home () {
  return (
    <>
      <Head>
        <title>Foody - Home</title>
        <meta
          name="description"
          content="Tu app de recetas digitales favorita"
        />
        <link rel="icon" href="/favicon-foody.ico" />
      </Head>
      <main>
        <section>
          <h1>
            Foddy es donde tus comidas
            <br /> se organizan 🍓
          </h1>
          <p>
            Foody te ayuda a organizar, planificar y compartir tus 
            <br />
            recetas favoritas con cualquier persona.
            <br /> Crea tu cuenta y empieza tu nuevo estilo de vida!
          </p>
          <div>
            <Button primary>PRUEBALO GRATIS</Button>
            <Button>INICIAR SESION</Button>
          </div>
        </section>
        <Illustration />
      </main>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        h1 {
          font-size: 2em;
          font-weight: 600;
          margin: 0;
        }

        p {
          padding-top: 2em;
          font-size: 1em;
          font-weight: 600;
          opacity: 60%;
          margin: 0;
        }

        main {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 50%;
          padding-right: 3em;
        }
      `}</style>
    </>
  )
}
