import styled from 'styled-components';

interface StyledButtonProps {
  backgroundColor: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  height: 55px;
  padding: 15px;
  color: white;
  text-transform: uppercase;
  background-color: ${props => props.backgroundColor};
  font-weight: bolder;
  font-size: 1.5rem;
`;
