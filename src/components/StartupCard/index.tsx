import React from 'react';
import { BsCircleFill } from 'react-icons/bs';

import { Container } from './styles';

const StartupCard: React.FC = () => (
  <Container>
    <BsCircleFill size={12} color="#05eb00" />
    <h2>NOME DA EMPRESA</h2>
    <p>descrição sobre a empresa</p>
  </Container>
);

export default StartupCard;
