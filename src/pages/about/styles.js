import styled from 'styled-components';
import { Fade } from '../../styles/animations';

export const Container = styled.div`
   scroll-margin-top: 75px;
   width: 100%;
   height: 100%;
   padding: 40px 20px;
   text-align: center;
   background: ${(props) => props.theme.bg};

  @media (max-width: 800px) {
    padding: 0px;
  }
`;

export const Header = styled.h1`
  color: ${(props) => props.theme.black};
  font-size: 32px;
  margin: 10px 0;

  > b {
    color: ${(props) => props.theme.pink};
    font-weight: 700;
  }


  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.theme.gray};
  font-size: 18px;
  margin-bottom: 20px;

  
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

export const Text = styled.p`
  color: ${(props) => props.theme.pink};
  margin: 32px 0 14px 0;
  text-transform: uppercase;
  letter-spacing: .1rem;
  font-size: 18px;
  font-weight: 700;
`;

export const Card = styled.div`
  text-align: left;
  animation: ${Fade} 1s;

  > main {
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;

    > div {
      display: flex;
      height: 22vh;
      width: 22vw;
      text-align: center;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      transition: 1s;
      background-color: ${(props) => props.theme.white};
      border-color: ${(props) => props.theme.black};
      border-style: solid;
      border-width: 1px;

      &:hover {
      height: 23vh;
      width: 23vw;
      border-color: ${(props) => props.theme.pink};
      border-width: 2px;
      color: ${(props) => props.theme.pink};
    }
  }

  > h3 {
    max-width: 700px;
    margin-bottom: 24px;
    color: ${(props) => props.theme.gray};
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }

  > p {
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: bold;
  }
  }

    
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  transition: 1s;

  &:hover{
    width: 110px;
    height: 110px;
  }
`;
