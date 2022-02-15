import React, { useState, useEffect } from 'react';

import * as S from './styles';
import Gift from '../../static/images/gift.png';
// import Luna from '../../static/images/luna.jpeg';

import ModalGift from './modalGift';
import ModalLogin from './modalLogin';

import api from '../../services/axios';
import { getCurrentUser, isAuthenticated } from '../../services/auth';

const AnimalsList = () => {
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalGift, setOpenModalGift] = useState(false);
  const [recompenseState, setRecompenseState] = useState('');
  const [animals, setAnimals] = useState([]);
  const { id: currentUserId } = getCurrentUser();
  const [animalId, setAnimalId] = useState('');

  useEffect(() => {
    const getAnimals = async () => {
      try {
        const { data } = await api.get('/animals/list');
        setAnimals(data);
      } catch (e) {
        // console.log({ e });
      }
    };

    getAnimals();
  }, []);

  const handleDeleteAnimal = async (animalIdActive) => {
    try {
      await api.delete(`animals/delete/${animalIdActive}`);
      setAnimals(animals.filter(({ id }) => (id !== animalIdActive)));
    } catch (err) {
      // console.log({ err });
    }
  };

  const handleOpenModalLogin = ({ animalId: animalIdActive, userId }) => {
    if (currentUserId === userId) {
      handleDeleteAnimal(animalIdActive);
    } else {
      setOpenModalLogin(true);
      setAnimalId(animalIdActive);
    }
  };

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
        <ModalLogin closeModal={() => setOpenModalLogin(false)} isLogged={isAuthenticated()} animal_id={animalId} />
      )}

      <S.List>
        {animals.map(({
          image, id, name, reward, species, user_id: userId,
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

            <S.Button onClick={() => handleOpenModalLogin({ animalId: id, userId })} isCurrentUser={currentUserId === userId}>
              {' '}
              {currentUserId === userId ? 'Remover' : 'Encontrei'}
              {' '}
            </S.Button>
          </S.Card>
        ))}
      </S.List>
    </S.Container>
  );
};

export default AnimalsList;
