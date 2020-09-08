import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 15px;
  background-color: #eeeeee;
  text-align: center;
  text-transform: uppercase;
  font-weight: bolder;

  svg {
    position: absolute;
    top: 10px;
    left: 15px;
    cursor: pointer;
  }
`;
