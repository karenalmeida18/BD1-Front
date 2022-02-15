import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  background-color: ${(props) => props.theme.bg};
`;

export const Header = styled.h2`
    font-weight: 700;
    font-size: 32px;
    margin: 18px 0;
    color: ${(props) => props.theme.pink};
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 10px;
  text-align: center;
`;

export const RemoveLinkStyle = styled.a`
  text-decoration: none;
  cursor: pointer;
  list-style: none;
  color: ${(props) => (props.active ? props.theme.pink : props.theme.black)};
  font-weight: 700;

  &:hover {
    color: ${(props) => props.theme.pink};
  }
`;

export const Button = styled.button`
  padding: 8px 28px;
  margin-top: 10px;
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.pink};
  margin-left: 40px;
  font-size: 16px;
  font-weight: 700;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.pink};
  transition: all .2s;

  &:hover {
    background-color: #aa3192;

    > a {
      color: ${(props) => props.theme.white};
    }
  }

  > a {
    color: ${(props) => props.theme.pink};
  }
`;

export const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  text-align: center;
  align-items: ${(props) => (!props.isAnswer ? 'start' : 'end')};
  border: 1px solid lightgray;
  border-radius: 30px;
  font-weight: 600;
  width: 400px;
  padding: 8px 20px;
  background: ${(props) => (props.theme.lightgray)};
  box-shadow: ${(props) => (props.theme.shadow2)};
  margin-top: ${(props) => (props.isAnswer ? '16px' : 'auto')};

  .message-header {
    h4 {
      font-size: 18px;
      font-weight: 600;
      margin: 0 5px;
      color: ${(props) => (props.theme.pink)};
    }

    color: ${(props) => (props.theme.gray)};
    display : flex;
    align-items: center;
  }

  .message-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;

    button {
      font-weight: 700;
      color: ${(props) => (props.theme.white)};
      background-color: ${(props) => (props.theme.pink)};
      border: 1px solid ${(props) => (props.theme.pink)};
      padding: 0 4px;
      border-radius: 4px;
    }
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MessageAnswer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  text-align: center;
  border: 1px solid lightgray;
  border-radius: 0 0 30px 30px;
  font-weight: 600;
  width: 400px;
  padding: 10px;
  background: ${(props) => (props.theme.white)};

  input {
    width: 100%;
    display: block;
    margin: 4px 0 14px 0;
    padding: 14px 16px;
    border-radius: 4px;
    font-size: initial;
    line-height: initial;
    background: transparent;
    border: 1px solid ${(props) => props.theme.lightgray};
    outline-color: ${(props) => props.theme.pink};
    box-shadow: ${(props) => props.theme.shadow2};

    &:focus, &:active {
      border: 1px solid ${(props) => props.theme.pink};
    }
  }

  label {
    color: ${(props) => props.theme.pink};
    font-weight: 700;
  }

`;
