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

 @font-face {
    font-family: 'TheJamsil';
    src: url('/fonts/TheJamsil1Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'TheJamsil';
    src: url('/fonts/TheJamsil2Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'TheJamsil';
    src: url('/fonts/TheJamsil3Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'TheJamsil';
    src: url('/fonts/TheJamsil4Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'TheJamsil';
    src: url('/fonts/TheJamsil5Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'TheJamsil';
    src: url('/fonts/TheJamsil6ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
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
