import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

import api from '../../services/axios';
import { isAuthenticated } from '../../services/auth';
// import Dog from '../../static/images/dog.svg';

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({});
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
      await api.post('/animals/register', values);
      setSuccess('Animal cadastrado com sucesso');
      setLoading(false);
      navigate('/');
      window.location.reload();
    } catch (err) {
      setLoading(false);
      setSuccess('Erro ao cadastrar. tente novamente');
    }
  };

  return (
    <S.Container id="reganimal">
      <S.Header>Cadastrar animal</S.Header>
      <S.Form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">
            Nome
            <input
              onChange={handleChange('name')}
              type="text"
              id="name"
              placeholder="Insira o nome do seu PET"
            />
          </label>

          <label htmlFor="species">
            Espécie
            <input
              onChange={handleChange('species')}
              type="text"
              id="species"
              placeholder="Insira a espécie do seu PET"
            />
          </label>

          <label htmlFor="race">
            Raça
            <input
              onChange={handleChange('race')}
              type="text"
              id="race"
              placeholder="Insira a raça do seu PET"
            />
          </label>
        </div>

        <div>
          <label htmlFor="description">
            Descrição
            <input
              onChange={handleChange('description')}
              type="text"
              id="description"
              placeholder="Insira a descrição do seu PET"
            />
          </label>

          <label htmlFor="reward">
            Recompensa
            <input
              onChange={handleChange('reward')}
              type="text"
              id="reward"
              placeholder="Insira a recompensa do seu PET"
            />
          </label>

          <label htmlFor="image">
            Foto
            <input
              onChange={handleChange('image')}
              className="input-file"
              type="file"
              id="image"
            />
          </label>
        </div>

        <label htmlFor="saveCheck" className="label-check">
          Adicionar como anúncio
          <input
            className="input-check"
            type="checkbox"
            id="saveCheck"
          />
        </label>
        {!isAuthenticated() && (
          <button
            type="button"
            className="button-cta"
            onClick={() => navigate('/login')}
          >
            {' '}
            Faça login para cadastrar seu pet!
          </button>
        )}
        <S.Button disabled={!isAuthenticated() || loading}> Cadastrar </S.Button>
        <span className="success">{success}</span>
      </S.Form>
    </S.Container>
  );
};

export default Register;
