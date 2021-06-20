import Arrow from 'components/Icons/Arrow'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Recipe ({ name, bookId, createdAt, id }) {
  return (
    <>
      <Link href={`/browse/recipe/${id}`}>
        <a>
          <button>
            {name}
            <Arrow />
          </button>
        </a>
      </Link>
      <style jsx>{`
        button {
          align-items: center;
          border: 1px solid transparent;
          border-radius: 6px;
          background-color: var(--light-blue);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          padding: 0.8em 2em;
          margin-top: 1em;
          margin-bottom: 1em;
          width: 38em;
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
      `}</style>
    </>
  )
}
