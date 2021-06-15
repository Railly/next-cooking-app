export default function Avatar ({ alt, src }) {
  return (
    <>
      <figure>
        {src ? <img alt={alt} src={src} title={alt} /> : <div></div>}
      </figure>

      <style jsx>{`
        img {
          border-radius: 9999px;
          border: 2px solid var(--yellow);
          width: 40px;
          height: 40px;
        }

        div {
          border-radius: 9999px;
          border: 2px solid var(--yellow);
          background-color: var(--light-blue);
          width: 40px;
          height: 40px;
        }

        figure {
          align-items: center;
          display: flex;
        }
      `}</style>
    </>
  )
}
