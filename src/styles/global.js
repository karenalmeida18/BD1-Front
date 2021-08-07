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
     font-size: initial;
     font-weight: initial;
  }
  button {
    cursor : pointer;
  }
  /* reset bootstrap css */
  p {
    margin: 0;
  }
  dl, ol, ul {
    margin: 0;
  }
  h1, h2 {
    font-weight: initial;
  }
`;
