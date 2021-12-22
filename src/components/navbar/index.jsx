import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../static/images/logo.png';

import { isAuthenticated, logout } from '../../services/auth';

import * as S from './styles';

const listItens = [
  {
    href: '/#home',
    name: 'Home',
  },
  {
    href: '/#about',
    name: 'Sobre',
  },
  {
    href: '/#lostanimals',
    name: 'Animais Perdidos',
  },
  {
    href: '/#reganimal',
    name: 'Cadastrar Animal',
  },
];

const Navbar = () => {
  const [active, setActive] = useState('');
  const navigate = useNavigate();

  return (
    <S.Nav>
      <img
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role="button"
        src={Logo}
        alt="Identidade visual da Helpet"
        onClick={() => navigate('/')}
        onKeyDown={() => navigate('/')}
      />
      <S.List>
        {listItens.map(({ name, href }) => (
          <S.ListItem onClick={() => setActive(name)} key={href}>
            <S.RemoveLinkStyle href={href} active={name === active}>
              {name}
            </S.RemoveLinkStyle>
          </S.ListItem>
        ))}
        {isAuthenticated() ? (
          <S.Button onClick={() => { logout(); window.location.reload(); }}>
            {' '}
            <S.RemoveLinkStyle> Sair </S.RemoveLinkStyle>
          </S.Button>
        ) : (
          <S.Button onClick={() => navigate('/login')}>
            {' '}
            <S.RemoveLinkStyle> Login </S.RemoveLinkStyle>
          </S.Button>
        )}
      </S.List>
    </S.Nav>
  );
};

export default Navbar;
