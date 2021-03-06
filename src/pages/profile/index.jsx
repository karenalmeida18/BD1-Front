import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import api from '../../services/axios';
import { logout } from '../../services/auth';
import * as S from './styles';

const Profile = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [messageId, setMessageId] = useState('');
  const [answer, setAnswer] = useState();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await api.get('/messages/list');
        setMessages(data);
        ReactTooltip.rebuild();
      } catch (e) {
        // console.log({ e });
      }
    };

    const getUsers = async () => {
      try {
        const { data } = await api.get('/user/list');
        setUsers(data);
        ReactTooltip.rebuild();
      } catch (e) {
        // console.log({ e });
      }
    };

    getMessages();
    getUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(`answers/register/${messageId}`, { answer });
      window.location.reload();
    } catch (err) {
      // console.log({ err });
    }
  };

  const setButtonFunction = (id) => {
    if (messageId) setMessageId('');
    else setMessageId(id);
  };

  return (
    <S.Container id="profile">
      <ReactTooltip />
      <S.Header> Perfil </S.Header>

      <S.Content>
        <h3> Suas mensagens</h3>
        {messages.length > 0
          && messages.map(({
            // eslint-disable-next-line camelcase
            id, message, date, send_by_user_id, answers,
          }) => {
            // eslint-disable-next-line camelcase
            const user = users.find(({ id: userListId }) => send_by_user_id === userListId);
            return (
              <S.MessageContainer>
                <S.MessageBox>
                  <p className="message-header">
                    <h4 data-tip={`Telefone: ${user?.telephone}` || 'Sem telefone'}>{user?.name}</h4>
                    {' '}
                    diz:
                    {' '}
                  </p>
                  <p>{message}</p>
                  <span>{date}</span>

                  <div className="message-footer">
                    <button onClick={() => setButtonFunction(id)}>
                      {!messageId ? 'Responder' : 'Cancelar'}
                    </button>
                  </div>
                </S.MessageBox>
                {messageId === id && (
                <S.MessageAnswer>
                  <label htmlFor="answer">
                    {'Sua resposta: '}
                    <input
                      onChange={(e) => setAnswer(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                      type="text"
                      id="answer"
                      placeholder="Insira sua resposta ou entre em contato"
                    />
                  </label>
                </S.MessageAnswer>
                )}
                {answers?.length > 0
                && answers.map(({ answer: answerMessage }) => (
                  <S.MessageBox isAnswer>
                    <p className="message-header">
                      <h4>Voc?? </h4>
                      {' '}
                      diz:
                      {' '}
                    </p>
                    <p>{answerMessage}</p>
                  </S.MessageBox>
                ))}
              </S.MessageContainer>
            );
          })}
        {messages.length === 0 && (
          <span> Voc?? n??o recebeu nenhuma mensagem ainda. </span>
        )}
      </S.Content>

      <S.Button
        onClick={() => {
          logout();
          navigate('/');
        }}
      >
        {' '}
        <S.RemoveLinkStyle> Sair </S.RemoveLinkStyle>
      </S.Button>
    </S.Container>
  );
};

export default Profile;
