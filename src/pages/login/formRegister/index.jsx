import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as S from '../styles';
import api from '../../../services/axios';

const FormRegister = ({ setRegisterForm }) => {
  const [values, setValues] = useState({
    name: '',
    password: '',
    address: '',
    telephone: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async (e) => {
    setMessage('');
    e.preventDefault();
    try {
      await api.post('/user/register', values);
      setMessage('Usuário registrado com sucesso');
      setRegisterForm();
    } catch (err) {
      setMessage('Erro ao cadastrar');
    }
  };

  return (
    <>
      <S.Header>Criar conta</S.Header>
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

        <label htmlFor="address">
          Endereço
          <input
            onChange={handleChange('address')}
            type="text"
            id="address"
            placeholder="Insira seu endereço"
          />
        </label>

        <label htmlFor="tel">
          Telefone de contato
          <input
            onChange={handleChange('telephone')}
            type="text"
            id="tel"
            placeholder="Insira seu telefone para contato"
          />
        </label>

        <label required htmlFor="password">
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
            setMessage('');
            setRegisterForm();
          }}
        >
          {' '}
          Voltar pro login
          {' '}
        </button>
        <S.Button> Cadastrar </S.Button>
        <span className="success">{message}</span>
      </S.Form>
    </>
  );
};

FormRegister.propTypes = {
  setRegisterForm: PropTypes.func.isRequired,
};

export default FormRegister;
