import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.bg};
  box-shadow: ${(props) => props.theme.shadow};
  padding: 20px 40px;

  @media (max-width: 800px) {
    padding: 10px;
  }
`;

export const List = styled.ul`
  display: flex;
  
  @media (max-width: 800px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  cursor: pointer;
  list-style: none;
  
  font-weight: 700;
  margin-left: 24px;

  &:hover {
    color: ${(props) => props.theme.pink};
  }
`;

export const RemoveLinkStyle = styled.a`
  text-decoration: none;
  cursor: pointer;
  list-style: none;
  color: ${(props) => (props.active ? props.theme.pink : props.theme.black)};
  font-weight: 700;
  margin-left: 24px;

  &:hover {
    color: ${(props) => props.theme.pink};
  }
`;
