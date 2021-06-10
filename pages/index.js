import Illustration from 'components/Illustration'
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
      <h1>Home</h1>
    </>
  )
}
