/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';
import api from '../../services/axios';

import Close from '../../static/images/close.png';

const ModalLogin = ({
  closeModal, isLogged, animal_id, user_id, send_by_user_id,
}) => {
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setMessage('');
    e.preventDefault();
    try {
      await api.post(`/messages/register/${animal_id}`, { message, user_id, send_by_user_id });
      setMessage('Mensagem enviada com sucesso');
      navigate('/profile');
    } catch (err) {
      setMessage('Erro ao enviar mensagem');
    }
  };

  return (
    <S.ModalContainer>
      <S.ModalContent>
        <img
          src={Close}
          role="presentation"
          alt="botão para fechar modal"
          className="modal-close"
          onClick={() => closeModal()}
        />

        <S.Form onSubmit={(e) => handleSubmit(e)}>
          {isLogged ? (
            <>
              <div>
                <label htmlFor="message">
                  Mensagem
                  <input
                    onChange={(e) => setMessage(e.target.value)}
                    type="textarea"
                    id="message"
                    placeholder="Insira sua mensagem para o dono do pet."
                  />
                </label>
              </div>
              <S.Button type="submit"> Enviar </S.Button>
            </>
          ) : (
            <>
              <p> Faça login para entrar em contato </p>
              <S.Button type="button" onClick={() => navigate('/login')}>
                {' '}
                Login
                {' '}
              </S.Button>
            </>
          )}
        </S.Form>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

ModalLogin.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  animal_id: PropTypes.number.isRequired,
  user_id: PropTypes.number.isRequired,
  send_by_user_id: PropTypes.number.isRequired,
};

ModalLogin.defaultProps = {
  isLogged: false,
};

export default ModalLogin;
