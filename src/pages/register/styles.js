import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: ${(props) => props.theme.bg};

  > div {
    display: flex;
    justify-content: center;
  }
`;

export const Form = styled.form`
  padding: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;

  .input-file {
    border: 1px dashed;
    padding: 10px 16px;
    margin: 10px 0;
  }

  .input-check {
    display: inline;
    width: max-content;
    margin: 0 6px;
    cursor: pointer;
  }

  .label-check {
    color: ${(props) => props.theme.black};
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 1/4;
    flex-direction: row-reverse;
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
  }
`;

export const Header = styled.h2`
    margin: 10px 0;
    color: ${(props) => props.theme.pink};
`;

export const Image = styled.img`
  width: 280px;
`;

export const Button = styled.button`
  border: none;
  width: 30%;
  margin: 20px auto;
  grid-column: 1/3;
  border-radius: 4px;
  color: ${(props) => props.theme.white};
  font-weight: bold;
  font-size: 16px;
  background: ${(props) => props.theme.pink};
  padding: 12px 16px;

  &:hover {
    background-color: #9b538c;
  }
`;
