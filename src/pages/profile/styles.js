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
