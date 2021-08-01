import React, { useState } from 'react';
import Logo from '../../static/images/logo.png';

import * as S from './styles';

const listItens = [
  {
    href: '#home',
    name: 'Home',
  },
  {
    href: '#about',
    name: 'Sobre',
  },
  {
    href: '#lostanimals',
    name: 'Animais Perdidos',
  },
  {
    href: '#reganimal',
    name: 'Cadastrar Animal',
  },
];

const Navbar = () => {
  const [active, setActive] = useState('');
  return (
    <S.Nav>
      <img src={Logo} alt="Identidade visual da Helpet" />
      <S.List>
        {
          listItens.map(({ name, href }) => (
            <S.ListItem onClick={() => (setActive(name))}>
              <S.RemoveLinkStyle href={href} active={name === active}>
                {name}
              </S.RemoveLinkStyle>
            </S.ListItem>
          ))
        }
      </S.List>
    </S.Nav>
  );
};

export default Navbar;
