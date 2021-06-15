import Link from 'next/link'
import { device } from 'styles/devices'

export default function Button ({ children, type, toPath }) {
  const bgColor = {
    primary: 'var(--orange)',
    secondary: 'var(--white)'
  }

  return (
    <>
      <Link href={toPath}>
        <button>
          <a>{children}</a>
        </button>
      </Link>
      <style jsx>{`
        button {
          border: 1px solid
            ${type === 'secondary' ? 'var(--orange)' : 'transparent'};
          width: 20em;
          background-color: ${bgColor[type]};
          color: ${type === 'secondary' ? 'var(--orange)' : 'var(--white)'};
          border-radius: 6px;
          padding: 0.8em 0;
          margin-top: 4em;
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
