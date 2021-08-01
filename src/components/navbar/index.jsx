import React from 'react';
import Logo from '../../static/images/logo.png';

import * as S from './styles';

const Navbar = () => (
  <S.Nav>
    <img src={Logo} alt="Identidade visual da Helpet" />
    <S.List>
      <S.ListItem>Home</S.ListItem>
      <S.ListItem>Sobre</S.ListItem>
      <S.ListItem>Cadastrar Animal</S.ListItem>
      <S.ListItem>Animais perdidos</S.ListItem>
      <S.ListItem>Como ajudar</S.ListItem>
    </S.List>
  </S.Nav>
);

export default Navbar;
