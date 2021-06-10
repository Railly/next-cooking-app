import css from 'styled-jsx/css'
import { device } from 'styles/devices'

export default css`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  h1 {
    font-size: 2em;
    font-weight: 600;
    margin: 0;
  }

  p {
    padding-top: 2em;
    font-size: 1em;
    font-weight: 600;
    color: var(--gray);
    margin: 0;
  }

  main {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  main > :global(svg) {
    width: 22em;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }

  @media ${device.laptopL} {
    main > :global(svg) {
      width: auto;
    }
  }

  @media ${device.laptop} {
    main > :global(svg) {
      height: 15em;
      margin-bottom: 3em;
    }
    main {
      flex-direction: column-reverse;
    }
    section {
      padding: 0;
    }
  }

  @media ${device.mobileL} {
    main > :global(svg) {
      display: none;
    }
    h1 {
      font-size: 1.5em;
    }
    p {
      font-size: 0.8em;
    }
  }
`
