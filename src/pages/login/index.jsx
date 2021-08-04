import React, { useState } from 'react';

import * as S from './styles';

const Login = () => {
  const [registerForm, setRegisterForm] = useState(false);
  return (
    <S.Container id="login">
      {!registerForm ? (
        <>
          <S.Header>Login</S.Header>
          <S.Form>
            <label htmlFor="name">
              Nome
              <input type="text" id="name" placeholder="Insira seu nome" />
            </label>

            <label htmlFor="password">
              Senha
              <input
                type="password"
                id="password"
                placeholder="Insira sua senha"
              />
            </label>

            <button type="button" className="button-cta" onClick={() => setRegisterForm(true)}> Criar conta </button>
            <S.Button> Entrar </S.Button>
          </S.Form>
        </>
      ) : (
        <>
          <S.Header>Criar conta</S.Header>
          <S.Form>
            <label htmlFor="name">
              Nome
              <input type="text" id="name" placeholder="Insira seu nome" />
            </label>

            <label htmlFor="address">
              Endereço
              <input
                type="text"
                id="address"
                placeholder="Insira seu endereço"
              />
            </label>

            <label htmlFor="tel">
              Telefone de contato
              <input
                type="text"
                id="tel"
                placeholder="Insira seu telefone para contato"
              />
            </label>

            <label htmlFor="password">
              Senha
              <input
                type="password"
                id="password"
                placeholder="Insira sua senha"
              />
            </label>

            <button type="button" className="button-cta" onClick={() => setRegisterForm(false)}> Voltar pro login </button>
            <S.Button> Cadastrar </S.Button>
          </S.Form>
        </>
      )}
    </S.Container>
  );
};

export default Login;
