import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --text: #242E35;
    --font-family: 'Inter', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: var(--text);
    line-height: 22px;
    font-size: 16px;
    font-family: var(--font-family);
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.background};
    overflow: hidden;

    ::-webkit-scrollbar {
      width: 6px;
    }
 
    ::-webkit-scrollbar-track {
        border-radius: 10px;
        background: #f4f4f4;
    }
 
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #dad7d7;
    }
}

  ul, ol, li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
