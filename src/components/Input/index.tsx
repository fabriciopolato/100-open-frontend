import React from 'react';

import { Container } from './styles';

interface IProps {
  name: string;
  type: string;
  label: string;
}

const Input: React.FC<IProps> = ({ name, type, label }) => (
  <Container>
    <label htmlFor={name}>{label}</label>
    <input type={type} name={name} />
  </Container>
);

export default Input;
