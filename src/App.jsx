import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Theme from './styles/theme';

import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import AnimalsList from './pages/animalsList';
import Register from './pages/register';
import Login from './pages/login';

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Navbar />
        {window && window.location.pathname === '/login' ? (
          <Login />
        ) : (
          <>
            <Home />
            <About />
            <AnimalsList />
            <Register />
          </>
        )}
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
