import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../services/axios';
import { logout } from '../../services/auth';
import * as S from './styles';

const Profile = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await api.get('/messages/list');
        setMessages(data);
      } catch (e) {
        console.log({ e });
      }
    };

    getMessages();
  }, []);

  return (
    <S.Container id="profile">
      <S.Header> Perfil </S.Header>

      <S.Content>
        <h3> Suas mensagens</h3>
        {messages.length > 0 && messages.map(({ message, date }) => (
          <div>
            <p>{message}</p>
            <span>{date}</span>
          </div>
        ))}
        {messages.length === 0 && (
          <span> Você não recebeu nenhuma mensagem ainda. </span>
        )}
      </S.Content>

      <S.Button onClick={() => { logout(); navigate('/'); }}>
        {' '}
        <S.RemoveLinkStyle> Sair </S.RemoveLinkStyle>
      </S.Button>
    </S.Container>
  );
};

export default Profile;
