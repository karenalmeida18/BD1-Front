import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Container = styled.div`
   width: 100%;
   padding-top: 60px;
   background-color: rgb(191 71 166 / 75%);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: opacity(0.5);
`;

export const Button = styled.button`
  border: none;
  width: 30%;
  margin: 20px auto;
  grid-column: 1/3;
  border-radius: 30px;
  color: ${(props) => props.theme.white};
  font-weight: bold;
  font-size: 16px;
  background: ${(props) => props.theme.pink};
  padding: 12px 16px;
  text-transform: uppercase;

  &:hover {
    background-color: #aa3192;
  }
`;
