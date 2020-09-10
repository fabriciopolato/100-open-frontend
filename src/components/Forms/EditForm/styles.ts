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
    color: #939393;
    font-size: 16px;
    font-weight: 500;
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
