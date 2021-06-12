import Button from 'components/Button'
import Illustration from 'components/Icons/Illustration'
import styles from './styles'

export default function Home () {
  return (
    <>
      <main>
        <section>
          <h1>
            Foody es donde tus comidas
            <br /> se organizan 🍓
          </h1>
          <p>
            Foody te ayuda a organizar, planificar y compartir tus 
            <br />
            recetas favoritas con cualquier persona.
            <br /> Crea tu cuenta y empieza tu nuevo estilo de vida!
          </p>
          <div>
            <Button type="primary" toPath="/register">
              PRU&Eacute;BALO GRATIS
            </Button>
            <Button type="secondary" toPath="/login">
              INICIAR SESI&Oacute;N
            </Button>
          </div>
        </section>
        <Illustration />
      </main>
      <style jsx>{styles}</style>
    </>
  )
}
