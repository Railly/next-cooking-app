import { device } from 'styles/devices'

export default function Button ({ children, onClick, disabled }) {
  return (
    <>
      <button onClick={onClick} disabled={disabled}>
        <a>{children}</a>
      </button>
      <style jsx>{`
        button {
          border: 1px solid transparent;
          width: 20em;
          background-color: ${disabled ? 'var(--gray)' : 'var(--black)'};
          color: var(--white);
          border-radius: 6px;
          padding: 0.8em 0;
          margin-top: 2em;
          margin-bottom: 1em;
        }
        button:hover,
        button:focus {
          transform: scale(1.03);
          transition: 0.3s;
        }
        button:focus {
          outline: 1px solid #fff;
        }
        button:active {
          transform: scale(0.99);
        }

        @media ${device.mobileL} {
          button {
            width: 15em;
            margin-top: 2em;
          }
        }
      `}</style>
    </>
  )
}
