import styled from 'styled-components';

export const Container = styled.div`
  min-width: 300px;

  p {
    margin-top: -13px;
    margin-bottom: 30px;
    color: #f24545;
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
