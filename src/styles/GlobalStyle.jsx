import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollBar};
    border-radius: 0; 
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.scrollBg};
    border-radius: 0;
  }
  ::-webkit-scrollbar-thumb:hover {
  background-color: #222;
}
`;

export default GlobalStyle;
