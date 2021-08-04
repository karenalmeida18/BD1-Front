import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  html, body, #root {
     -webkit-font-smoothing: antialiased !important;
     font-family: 'Montserrat', sans-serif;
     scroll-behavior: smooth;
  }
  button {
    cursor : pointer;
    border-radius: 30px;
  }
`;
