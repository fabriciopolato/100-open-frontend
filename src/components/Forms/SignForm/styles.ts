import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;

  button {
    margin: 15px 0;
    width: 100%;
  }

  form {
    a {
      font-size: 20px;
    }
  }
`;

export const StyledError = styled.div`
  /* margin-bottom:  */
  text-align: center;
`;

export const StyledLoader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
