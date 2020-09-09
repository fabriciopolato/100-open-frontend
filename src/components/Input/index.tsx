import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<IProps> = ({ name, label, ...rest }) => (
  <Container>
    <label htmlFor={name}>{label}</label>
    <input id={name} {...rest} />
  </Container>
);

export default Input;
