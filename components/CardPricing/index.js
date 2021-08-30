import LandingButton from 'components/Buttons/LandingButton'

const content = {
  basic: {
    title: 'Basico',
    price: 'S/. 4.90',
    description: 'Usa las funcionalidades basicas'
  },
  popular: {
    title: 'Popular',
    price: 'S/. 16.90',
    description: 'La eleccion de la mayoria de personas'
  },
  bussines: {
    title: 'Empresarial',
    price: 'S/. 99.90',
    description: 'Para las empresas'
  }
}

export default function CardPricing ({ plan }) {
  return (
		<>
      <section>
        <header>
          <span>{content[plan].title}</span>
          <span>
            <h1>{content[plan].price} {' '}
            <span className="gray">por mes</span>
            </h1>
          </span>
          <span>{content[plan].description}</span>
        </header>
        <main>
          <ul>
            <li>
              Carateristica 1
            </li>
            <li>
              Carateristica 2
            </li>
            <li>
              Carateristica 3
            </li>
            <li>
              Carateristica 4
            </li>
          </ul>
          <LandingButton type="secondary" toPath="/">Elige el plan</LandingButton>
        </main>
      </section>
			<style jsx>{`
        .gray {
          font-weight: 500;
          font-size: 80%;
          color: #999;
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
