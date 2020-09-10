import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;

  button {
    margin-top: 15px;
    width: 100%;
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
