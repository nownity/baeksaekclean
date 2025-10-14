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
    background-color: #919191;
    border-radius: 0; 
  }

  ::-webkit-scrollbar-track {
    background-color: #b1b1b1;
    border-radius: 0;
  }
  ::-webkit-scrollbar-thumb:hover {
  background-color: #222;
}

  @font-face {
    font-family: 'NoonnuBasicGothicRegular';
    src: url('/fonts/NoonnuBasicGothicRegular.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  body {
    font-family: 'NoonnuBasicGothicRegular', sans-serif;
  }
`;

export default GlobalStyle;
