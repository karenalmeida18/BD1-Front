import styled from 'styled-components';
import { Fade } from '../../styles/animations';

export const Container = styled.div`
  width: max-content;
  margin: auto;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.bg};
  border-bottom: 1px solid ${(props) => props.theme.lightgray};
`;

export const List = styled.ul`
  display: flex;
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
`;

export const Content = styled.div`
  padding: 20px;
  animation: ${Fade} 1s;
`;
