import React from 'react';

import * as S from './styles';

import Tabs from '../../components/tabs';

const AboutItems = [
  {
    tabLabel: 'Cadastrar animal',
    tabItem: (
      <S.Card>
        <p> 1° - Faça login </p>
        <p> 2° - Cadastre o PET com todas informações </p>
        <p>
          {' '}
          3° - É isso! Seu PET irá aparecer na sessão de animais perdidos e
          basta aguardar a notificação.
          {' '}
        </p>
      </S.Card>
    ),
  },
  {
    tabLabel: 'Anunciar animal',
    tabItem: (
      <S.Card>
        <h3>
          {' '}
          Para seu anúncio ter mais visibilidade, colocamos ele na página
          inicial, onde todos os usuários podem visualizar ao entrar na
          plataform. Quer saber como faz? Se liga no passo a passo abaixo.
          {' '}
        </h3>
        <p> 1° - Assine a conta premium </p>
        <p>
          {' '}
          2° - Envie o banner do seu PET com as informações do jeitinho que você
          quer que apareça.
          {' '}
        </p>
        <p>
          {' '}
          3° - É isso! Seu PET irá aparecer na sessão principal da nossa página
          como anúncio.
          {' '}
        </p>
      </S.Card>
    ),
  },
  {
    tabLabel: 'Recompensa',
    tabItem: (
      <S.Card>
        <h3>
          {' '}
          A recompensa é a forma de você retribuir a pessoa que encontrar seu
          PET. Pode ser customizada da forma que você preferir, retribuindo como
          você quiser. Saiba como cadastrar no passo a passo abaixo.
        </h3>
        <p>
          {' '}
          Ao cadastrar seu animal, tem uma opção para recompensa, onde vc pode
          escolher o que quiser!
          {' '}
        </p>
        <p>
          {' '}
          Por uma taxa mínima fazemos o trabalho pra você de levar a recompensa
          até o recompensador!
          {' '}
        </p>
      </S.Card>
    ),
  },
];

const About = () => (
  <S.Container id="about">
    <S.Header>
      Oi, Somos a
      {' '}
      <b>Helpet</b>
      !
      <S.Subtitle> Ajudamos você com a divulgação do seu pet! </S.Subtitle>
    </S.Header>

    <S.Text>Nosso serviço</S.Text>

    <Tabs items={AboutItems} />
  </S.Container>
);

export default About;
