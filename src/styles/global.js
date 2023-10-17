import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  :root {
    font-size: 62.5%;
  }

  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BLUE_300};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none; 
  }

`
