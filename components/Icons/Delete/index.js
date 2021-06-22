export default function Delete ({ onClick }) {
  return (
    <svg
      onClick={onClick}
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={10.5} cy={10.5} r={10.5} fill="#F36868" />
      <path d="M5.25 9.625h11.375v1.75H5.25v-1.75z" fill="#fff" />
    </svg>
  )
}
