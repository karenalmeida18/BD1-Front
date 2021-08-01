import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

import Laco from '../../static/images/laco.png';
import Close from '../../static/images/close.png';

const ModalGift = ({ closeModal, recompense }) => (
  <S.ModalContainer>
    <S.ModalContent>
      <img src={Close} role="presentation" alt="botão para fechar modal" className="modal-close" onClick={() => closeModal()} />
      <S.Gift>
        <div className="gift-top">
          <img src={Laco} alt="" className="gift-img" />
          <div className="gift-top-content"> </div>
        </div>
        <div className="gift-bottom">
          <p className="gift-content">
            {' '}
            { recompense }
            {' '}
          </p>
          <div className="gift-middle" />
        </div>
      </S.Gift>
    </S.ModalContent>
  </S.ModalContainer>
);

ModalGift.propTypes = {
  closeModal: PropTypes.func.isRequired,
  recompense: PropTypes.string.isRequired,
};

export default ModalGift;
