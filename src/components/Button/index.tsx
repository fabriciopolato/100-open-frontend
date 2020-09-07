import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
}

const Button: React.FC<IProps> = ({
  backgroundColor = '#45aaf2',
  children,
  ...rest
}) => {
  return (
    <StyledButton backgroundColor={backgroundColor} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
