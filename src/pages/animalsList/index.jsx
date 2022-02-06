import React, { useState, useEffect } from 'react';

import * as S from './styles';
import Gift from '../../static/images/gift.png';
// import Luna from '../../static/images/luna.jpeg';

import ModalGift from './modalGift';
import ModalLogin from './modalLogin';

import api from '../../services/axios';

const AnimalsList = () => {
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalGift, setOpenModalGift] = useState(false);
  const [recompenseState, setRecompenseState] = useState('');
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const getAnimals = async () => {
      try {
        const { data } = await api.get('/animals/list');
        setAnimals(data);
      } catch (e) {
        console.log({ e });
      }
    };

    getAnimals();
  }, []);

  return (
    <S.Container id="lostanimals">
      <S.Header>Animais perdidos</S.Header>

      {openModalGift && (
        <ModalGift
          closeModal={() => setOpenModalGift(false)}
          recompense={recompenseState}
        />
      )}

      {openModalLogin && (
        <ModalLogin closeModal={() => setOpenModalLogin(false)} />
      )}

      <S.List>
        {animals.map(({
          image, name, reward, species,
        }) => (
          <S.Card key={name}>
            {image && (<S.Image src={image} alt={`foto de um ${species}`} />)}

            <S.Subtitle>{name}</S.Subtitle>

            {reward && (
            <>
              <S.Recompense>
                <p> Clique no ícone abaixo para ver a recompensa: </p>
                <img
                  role="presentation"
                  src={Gift}
                  alt="mão segurando uma caixa de presente"
                  className="icon-gift"
                  onKeyPress={() => setOpenModalGift(true)}
                  onClick={() => {
                    setOpenModalGift(true);
                    setRecompenseState(reward);
                  }}
                />
              </S.Recompense>
            </>
            )}

            <S.Button onClick={() => setOpenModalLogin(true)}>
              {' '}
              Encontrei
              {' '}
            </S.Button>
          </S.Card>
        ))}
      </S.List>
    </S.Container>
  );
};

export default AnimalsList;
