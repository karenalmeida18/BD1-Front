import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100%;
   padding: 20px;
   background: ${(props) => props.theme.bg};
`;

export const Header = styled.h1`
  color: ${(props) => props.theme.black};
  font-size: 32px;
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.theme.gray};
  font-size: 18px;
  margin: 10px 0;
`;
