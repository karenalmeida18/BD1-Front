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

  > h3 {
    max-width: 700px;
    margin-bottom: 24px;
    color: ${(props) => props.theme.gray}
  }

  > p {
    margin-bottom: 16px;
  }
`;
