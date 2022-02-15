import styled from 'styled-components';
import { Transform, FadeBottom } from '../../styles/animations';

export const Container = styled.div`
   scroll-margin-top: 70px;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   height: 100%;
   padding: 40px 20px;
   text-align: center;
   background: ${(props) => props.theme.white};
`;

export const Header = styled.h2`
   margin-bottom: 32px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  position: relative;
  padding: 20px;
  width: 300px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.lightgray};
  box-shadow: ${(props) => props.theme.shadow};

`;

export const Image = styled.img`
  width: 130px;
  margin: auto;
  height: 130px;
  border-radius: 100%;
  border: 5px solid ${(props) => props.theme.pink}; 
  object-fit: cover;
`;

export const Subtitle = styled.h3`
   margin-bottom: 16px;
`;

export const Recompense = styled.div`
   margin: 8px 0;

   > p {
      font-size: 14px;
   }

   .icon-gift {
     width: 40px;
     height: 40px;
     cursor: pointer;
     transition: all .2s;

     &:hover {
        transform: scale(1.5);
     }
  }

`;

export const Button = styled.button`
  background-color: ${(props) => (props.isCurrentUser ? 'darkred' : 'transparent')};
  margin-top: 16px;
  width: 80%;
  font-weight: 700;
  color: ${(props) => (props.isCurrentUser ? props.theme.white : props.theme.pink)};
  border: 2px solid ${(props) => (props.isCurrentUser ? 'darkred' : props.theme.pink)};
  border-radius: 30px;
  padding: 8px 16px;
  text-transform: uppercase;

  &:hover {
     background-color: ${(props) => props.theme.pink};
     color: ${(props) => props.theme.white};
     transition: all .2s;
  }

  :disabled {
    background-color: ${(props) => props.theme.lightgray};
    color: ${(props) => props.theme.gray};
    border: 2px solid ${(props) => props.theme.white}; 
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
`;

export const ModalContent = styled.div`
   background: white;
   width: 400px;
   max-height: 500px;
   margin: auto;
   padding: 40px 20px;
   border-radius: 4px;

   .modal-close {
    width: 20px;
    height: 20px;
    position: relative;
    right: -180px;
    top: -30px;
    cursor: pointer;
   }
`;

export const Gift = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;

   .gift-content {
      position: absolute;
      top: -20px;
      right: 130px;
      animation: ${FadeBottom} 1s;
   }

   .gift-top {
      animation: ${Transform} 1s;
      position: relative;
      width: 120px;
      height: 20px;
      background-color: #7A1D1E;
      box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 30%);
      transform: translateX(-50%) rotate(-90deg) skew(10deg, 10deg)
   }

   .gift-img {
      position: absolute;
      width: 30px;
      height: 30px;
      top: -15px;
      left: 45px;
   }

   .gift-bottom {
      width: 100px;
      height: 100px;
      background-color: #f4b1cc;
      box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 30%);
      
      > .gift-middle {
         height: 100%;
         width: 20px;
         background-color: #7A1D1E;
         margin: auto;

      }
   }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;

  > div {
     width: 100%;
  }

  button {
     width: 100%;
  }

  input {
    width: 100%;
    display: block;
    margin: 4px 0 18px 0;
    padding: 14px 16px;
    border-radius: 4px;
    background: transparent;
    border: 1px solid ${(props) => props.theme.lightgray};
    outline-color: ${(props) => props.theme.pink};

    &:focus, &:active {
      border: 1px solid ${(props) => props.theme.pink};
    }
  }

  label {
    color: ${(props) => props.theme.pink};
    font-weight: 700;
    width: 100%;
  }
`;
