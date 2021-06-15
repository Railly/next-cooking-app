export default function Avatar ({ alt, src }) {
  return (
    <>
      <figure>
        <img alt={alt} src={src} title={alt} />
      </figure>

      <style jsx>{`
        img {
          border-radius: 9999px;
          border: 2px solid var(--yellow);
          width: 40;
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
