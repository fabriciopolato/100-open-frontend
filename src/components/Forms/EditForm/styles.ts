import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid #eee;
`;

export const StartupInfo = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border-bottom: 2px solid #eee;

  h2 {
    margin-bottom: 8px;
    font-weight: 500;
  }

  p {
    color: #bebebe;
    font-weight: 500;
  }

  span {
    color: #a5a5a5;
    font-weight: bold;
  }

  button {
    width: 100%;
    margin: 16px 0;
  }
`;

export const Form = styled.form`
  padding: 20px;

  fieldset {
    width: 100%;
    border: none;

    legend {
      text-transform: uppercase;
      color: #939393;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }

  button {
    width: 100%;
  }
`;

export const StyledLoader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledCities = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: #eeeeee solid 2px;
  padding: 8px;
  margin-bottom: 20px;
  height: 150px;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const StyledButton = styled.button`
  all: unset;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 5px;
  text-decoration: underline;
  color: blue;
  top: 0;
`;
