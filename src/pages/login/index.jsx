import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../services/axios';
import * as S from './styles';
import { login } from '../../services/auth';

import FormRegister from './formRegister';

const Login = () => {
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState(false);
  const [values, setValues] = useState({
    name: '',
    password: '',
  });
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async (e) => {
    setSuccess('');
    e.preventDefault();
    setLoading(true);
    try {
      const { data: { token, user } } = await api.post('/user/login', values);
      setSuccess('Usuário logado com sucesso');
      setLoading(false);
      login({ token, user });
      navigate('/');
    } catch (err) {
      setLoading(false);
      setSuccess('Erro ao logar');
    }
  };

  return (
    <S.Container id="login">
      {!registerForm ? (
        <>
          <S.Header>Login</S.Header>
          <S.Form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="name">
              Nome
              <input
                onChange={handleChange('name')}
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
                onChange={handleChange('password')}
                type="password"
                id="password"
                placeholder="Insira sua senha"
              />
            </label>

            <button
              type="button"
              className="button-cta"
              onClick={() => {
                setSuccess('');
                setRegisterForm(true);
              }}
            >
              {' '}
              Criar conta
              {' '}
            </button>
            <S.Button type="submit" disabled={loading}> Entrar </S.Button>
            <span className="success">{success}</span>
          </S.Form>
        </>
      ) : (
        <FormRegister setRegisterForm={() => setRegisterForm(false)} />
      )}
    </S.Container>
  );
};

export default Login;
