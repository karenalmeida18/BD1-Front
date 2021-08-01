import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Theme from './styles/theme';

import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import AnimalsList from './pages/animalsList';

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Navbar />
        <Home />
        <About />
        <AnimalsList />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
