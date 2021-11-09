import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding-top: 40px ;
  background-color: ${(props) => props.theme.bg};
`;

export const Form = styled.form`
  padding: 32px 28px;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  width: 450px;
  box-shadow: ${(props) => props.theme.shadow};
  background: ${(props) => props.theme.white};

  @media (max-width: 800px) {
    width: 100%;
  }

  .button-cta {
    background: none;
    border: none;
    text-align: right;
    text-decoration: underline;
    margin-bottom: 8px;
    font-size: 14px;
    color: ${(props) => props.theme.gray};

    &:hover {
      color: ${(props) => props.theme.pink};
    }
  }

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

  .success {
    text-align: center;
    color: #7171da;
    font-weight: 600;
  }
`;

export const Header = styled.h2`
    font-weight: 700;
    font-size: 32px;
    margin: 18px 0;
    color: ${(props) => props.theme.pink};
`;

export const Button = styled.button`
  border: none;
  margin: 8px auto;
  width: 100%;
  border-radius: 30px;
  color: ${(props) => props.theme.white};
  font-weight: bold;
  font-size: 16px;
  background: ${(props) => props.theme.pink};
  padding: 12px 16px;

  &:hover {
    background-color: #9b538c;
  }

`;
