import React, { useState } from 'react';

// import api from '../../services/axios';
import * as S from './styles';

import FormRegister from './formRegister';

const Login = () => {
  const [registerForm, setRegisterForm] = useState(false);
  /* const [values, setValues] = useState({
    name: '',
    password: '',
  });

    const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async (e) => {
    setSuccess('');
    e.preventDefault();
    try {
      await api.post('/user/login', values);
      setSuccess('Usuário logado com sucesso');
      login();
    } catch (err) {
      console.log({ err });
    }
  }; */

  return (
    <S.Container id="login">
      {!registerForm ? (
        <>
          <S.Header>Login</S.Header>
          <S.Form>
            <label htmlFor="name">
              Nome
              <input
                // onChange={handleChange('name')}
                required
                type="text"
                id="name"
                placeholder="Insira seu nome"
              />
            </label>

            <label htmlFor="password">
              Senha
              <input
                required
                // onChange={handleChange('password')}
                type="password"
                id="password"
                placeholder="Insira sua senha"
              />
            </label>

            <button
              type="button"
              className="button-cta"
              onClick={() => setRegisterForm(true)}
            >
              {' '}
              Criar conta
              {' '}
            </button>
            <S.Button> Entrar </S.Button>
            {/* <span className="success">{success}</span> */}
          </S.Form>
        </>
      ) : (
        <FormRegister setRegisterForm={() => setRegisterForm(false)} />
      )}
    </S.Container>
  );
};

export default Login;
