import Card from 'components/CardPricing'


export default function Pricing () {
  return(
    <>
      <h1>Precios simples y transparentes</h1>
      <p>Sin contratos, ni sorpresas</p>
      <div>
        <Card plan="basic"/>
        <Card plan="popular"/>
        <Card plan="bussines"/>
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
