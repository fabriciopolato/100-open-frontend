import styled from 'styled-components';

export const Container = styled.div`
  min-width: 500px;

  a > button {
    width: 100%;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-weight: 500;
    color: #939393;
    margin-bottom: 5px;
    font-size: 1.5rem;
  }
`;

export const SearchInput = styled.div`
  border: #eee solid 1px;
  display: flex;
  margin-bottom: 16px;

  input {
    flex: 4;
    border: solid 1px #eee;
    padding: 16px;
    font-size: 18px;
    size: 1;
  }
`;

export const StyledError = styled.p`
  text-align: center;
  margin-bottom: 15px;
  font-size: 18px;
`;

export const StyledLoader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
