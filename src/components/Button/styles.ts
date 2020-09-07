import styled from 'styled-components';

interface StyledButtonProps {
  backgroundColor: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 15px;
  color: white;
  text-transform: uppercase;
  background-color: ${props => props.backgroundColor};
  font-weight: bolder;
  font-size: 1.5rem;
`;
