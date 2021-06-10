export default function Button ({ children, primary }) {
  return (
    <>
      <button>{children}</button>
      <style jsx>{`
        button {
          border: 1px solid ${primary ? 'transparent' : '#FF6961'};
          width: 20em;
          background-color: ${primary ? '#FF6961' : '#FFF'};
          color: ${primary ? '#FFF' : '#FF6961'};
          border-radius: 6px;
          padding: 0.8em 0;
          margin-top: 4em;
        }
        button:hover,
        button:focus {
          background: #0053ba;
        }
        button:focus {
          outline: 1px solid #fff;
        }
        button:active {
          transform: scale(0.99);
        }
      `}</style>
    </>
  )
}
