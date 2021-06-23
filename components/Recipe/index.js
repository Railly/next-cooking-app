import Arrow from 'components/Icons/Arrow'
import Garbage from 'components/Icons/Garbage'
import Link from 'next/link'

export default function Recipe ({ title, bookId, createdAt, id, onClick }) {
  return (
    <>
      {onClick
        ? (
        <button onClick={onClick}>
          {title}
          <Garbage width={31} height={31} fill="var(--red)" />
        </button>
          )
        : (
        <Link href={`/browse/book/${bookId}/${id}`}>
          <a>
            <button>
              {title}
              <Arrow width={31} height={31} />
            </button>
          </a>
        </Link>
          )}
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
          width: 27vw;
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
