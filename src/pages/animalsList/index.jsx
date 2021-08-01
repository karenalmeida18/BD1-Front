import React, { useState } from 'react';

import * as S from './styles';
import Nino from '../../static/images/shitzu.jpg';
import Gift from '../../static/images/gift.png';
import Luna from '../../static/images/luna.jpeg';

import ModalGift from './modalGift';

const animals = [
  {
    image: Nino,
    name: 'Nino',
    recompense: '500',
    species: 'dog',
  },
  {
    image: Nino,
    name: 'Nino',
    recompense: 'R$ 500',
    species: 'dog',
  },
  {
    image: Nino,
    name: 'Nino',
    recompense: '500',
    species: 'dog',
  },
  {
    image: Luna,
    name: 'Luna',
    recompense: 'R$ 1000',
    species: 'dog',
  },
  {
    image: Luna,
    name: 'Luna',
    recompense: '1000',
    species: 'dog',
  },
  {
    image: Luna,
    name: 'Luna',
    recompense: '1000',
    species: 'dog',
  },
];

const AnimalsList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [recompenseState, setRecompenseState] = useState('');

  return (
    <S.Container id="lostanimals">
      <S.Header>Animais perdidos</S.Header>

      {openModal && (
        <ModalGift closeModal={() => setOpenModal(false)} recompense={recompenseState} />
      )}

      <S.List>
        {animals.map(({
          image, name, recompense, species,
        }) => (
          <S.Card>
            <S.Image src={image} alt={`foto de um ${species}`} />

            <S.Subtitle>{name}</S.Subtitle>

            {recompense && (
            <>
              <S.Recompense>
                <p> Clique no ícone abaixo para ver a recompensa: </p>
                <img
                  role="presentation"
                  src={Gift}
                  alt="mão segurando uma caixa de presente"
                  className="icon-gift"
                  onKeyPress={() => setOpenModal(true)}
                  onClick={() => {
                    setOpenModal(true);
                    setRecompenseState(recompense);
                  }}
                />
              </S.Recompense>
            </>
            )}

            <S.Button> Encontrei </S.Button>
          </S.Card>
        ))}
      </S.List>
    </S.Container>
  );
};

export default AnimalsList;
