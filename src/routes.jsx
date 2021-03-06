import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import AnimalsList from './pages/animalsList';
import Register from './pages/register';
import Login from './pages/login';
import Profile from './pages/profile';

const Landing = () => (
  <>
    <Navbar />
    <Home />
    <About />
    <AnimalsList />
    <Register />
  </>
);

const LoginPage = () => (
  <>
    <Navbar />
    <Login />
  </>
);

const ProfilePage = () => (
  <>
    <Navbar />
    <Profile />
  </>
);

export default function RoutesWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}
