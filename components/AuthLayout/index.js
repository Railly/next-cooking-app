export default function AuthLayout ({ children }) {
  return (
    <>
      <div>{children}</div>

      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          background: linear-gradient(
            0deg,
            rgba(255, 105, 97, 0.9) 0%,
            rgba(38, 84, 125, 0.9) 100%
          );
          height: 100vh;
        }
      `}</style>
    </>
  )
}
