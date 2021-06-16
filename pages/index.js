import LandingButton from 'components/Buttons/LandingButton'
import Illustration from 'components/Icons/Illustration'
import styles from './styles'
// import {addCookbook} from 'firebase/client'

export default function Home () {
  // const handleClick = () => [
  // addCookbook()
  // ]

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
            <LandingButton type="primary" toPath="/register">
              PRU&Eacute;BALO GRATIS
            </LandingButton>
            <LandingButton type="secondary" toPath="/login">
              INICIAR SESI&Oacute;N
            </LandingButton>
          </div>
        </section>
        <Illustration />
      </main>
      <style jsx>{styles}</style>
    </>
  )
}
