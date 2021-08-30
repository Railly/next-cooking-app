import Card from "components/CardService";

export default function Services () {
  return(
    <>
      <h1>Nuestros servicios</h1>
      <p>Proveemos los mejores servicios a nuestros clientes</p>
      <div>
        <Card service="cookbook" />
        <Card service="recipe"/>
        <Card service="share"/>
      </div>
      <style jsx>{`
        h1, p {
          margin-left: 5rem;
          padding-bottom: 1rem;
        } 

        div {
          display: flex;
          justify-content: space-evenly;
        }
      `}</style>
    </>
  )
}
