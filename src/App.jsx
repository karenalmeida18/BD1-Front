import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Theme from './styles/theme';

import Routes from './routes';

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
