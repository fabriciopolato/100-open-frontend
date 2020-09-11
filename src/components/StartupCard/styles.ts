import styled from 'styled-components';

interface IProps {
  isActive: boolean;
}

export const Container = styled.div<IProps>`
  position: relative;
  border: 2px solid #eee;
  margin-bottom: 16px;
  padding: 16px;
  background-color: ${props => !props.isActive && '#fafafa'};

  svg {
    fill: ${props => !props.isActive && '#dddddd'};
    position: absolute;
    top: 8px;
    right: 8px;
  }

  h2 {
    color: ${props => !props.isActive && '#b0b0b0'};
  }

  p {
    color: #bebebe;
    font-weight: 500;
  }

  span {
    color: #a5a5a5;
    font-weight: bold;
  }
`;
