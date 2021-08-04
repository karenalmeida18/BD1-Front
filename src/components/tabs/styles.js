import styled from 'styled-components';
import { Fade } from '../../styles/animations';

export const Container = styled.div`
  width: max-content;
  margin: auto;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.bg};
  border-bottom: 1px solid ${(props) => props.theme.lightgray};

  @media (max-width: 800px) {
    background-color: ${(props) => props.theme.bg};
    border-bottom: 0;
    max-width: 100vw;
  }
`;

export const List = styled.ul`
  display: flex;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ListItem = styled.li`
  cursor: pointer;
  list-style: none;
  color: ${(props) => (props.active ? props.theme.pink : props.theme.black)};
  border-bottom: ${(props) => (props.active && `2px solid ${props.theme.pink}`)};
  transition: color .2s;
  font-weight: 700;
  margin: 0 24px;
  padding: 10px;
  width: max-content;

  @media (max-width: 800px) {
    font-size: 14px;
    margin: 0;
  }
`;

export const Content = styled.div`
  padding: 20px;
  max-width: 100vw;
  font-size: 12px;
  animation: ${Fade} 1s;
`;
