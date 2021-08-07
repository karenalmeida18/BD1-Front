import React from 'react';

import * as S from './styles';
// import Dog from '../../static/images/dog.svg';

const Register = () => (
  <S.Container id="reganimal">
    <S.Header>Cadastrar animal</S.Header>
    <S.Form>
      <div>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            placeholder="Insira o nome do seu PET"
          />
        </label>

        <label htmlFor="species">
          Espécie
          <input
            type="text"
            id="species"
            placeholder="Insira a espécie do seu PET"
          />
        </label>

        <label htmlFor="race">
          Raça
          <input
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
            type="text"
            id="description"
            placeholder="Insira a descrição do seu PET"
          />
        </label>

        <label htmlFor="recompensa">
          Recompensa
          <input
            type="text"
            id="recompensa"
            placeholder="Insira a recompensa do seu PET"
          />
        </label>

        <label htmlFor="image">
          Foto
          <input className="input-file" type="file" id="image" />
        </label>
      </div>

      <label htmlFor="saveCheck" className="label-check">
        Adicionar como anúncio
        <input className="input-check" type="checkbox" id="saveCheck" />
      </label>
      <S.Button> Cadastrar </S.Button>
    </S.Form>
  </S.Container>
);

export default Register;
