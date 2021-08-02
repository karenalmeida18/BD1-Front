import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

import Close from '../../static/images/close.png';

const ModalLogin = ({ closeModal }) => (
  <S.ModalContainer>
    <S.ModalContent>
      <img src={Close} role="presentation" alt="botão para fechar modal" className="modal-close" onClick={() => closeModal()} />

      <S.Form>
        <div>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              id="name"
              placeholder="Insira seu nome para contato"
            />
          </label>

          <label htmlFor="tel">
            Telefone
            <input
              type="text"
              id="tel"
              placeholder="Insira seu telefone para contato"
            />
          </label>

        </div>
        <S.Button> Enviar </S.Button>
        <p style={{ marginTop: '15px' }}> ou </p>
        <S.Button> Faça login </S.Button>
      </S.Form>
    </S.ModalContent>
  </S.ModalContainer>
);

ModalLogin.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ModalLogin;
