import React from 'react';

import * as S from './styles';

import Tabs from '../../components/tabs';

const AboutItems = [
  {
    tabLabel: 'Cadastrar animal perdido',
    tabItem: <h2> Teste </h2>,
  },
  {
    tabLabel: 'Anunciar animal perdido',
    tabItem: <h2> Propganda </h2>,
  },
  {
    tabLabel: 'Recompensa',
    tabItem: <h2> Recompensa </h2>,
  },
];

const About = () => (
  <S.Container>
    <S.Header>
      <S.Header>Oi, Somos a Helpet!</S.Header>
      <S.Subtitle> Ajudamos você com a divulgação do seu pet! </S.Subtitle>
    </S.Header>

    <Tabs items={AboutItems} />
  </S.Container>
);

export default About;
