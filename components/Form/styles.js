import css from 'styled-jsx/css'

export default css`
  form > :global(svg) {
  }

  p {
    color: var(--gray);
    font-size: 0.8em;
    margin-bottom: 2em;
  }

  section {
    display: flex;
    justify-content: center;
    width: 80vw;
    margin: 3em 0;
    background-color: #fff;
  }

  input {
    margin: 1.5em 0;
    border: 1px solid var(--gray);
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 1px 1px var(--orange);
  }

  form {
    background-color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 2em;
  }

  h1 {
    margin: 1em 0;
  }
`
