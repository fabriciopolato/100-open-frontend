import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 1.5rem;
    color: #939393;
  }

  input {
    height: 43px;
    font-size: 1rem;
    margin-bottom: 16px;
    border: solid 2px #eee;
  }
`;
