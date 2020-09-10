import React from 'react';
import { BsCircleFill } from 'react-icons/bs';

import { Container } from './styles';

interface IProps {
  name: string;
  description?: string;
  type: string;
  isActive: boolean;
}

const StartupCard: React.FC<IProps> = ({
  name,
  description,
  type,
  isActive,
}) => (
  <Container isActive={isActive}>
    <BsCircleFill size={12} color="#05eb00" />
    <h2>{name}</h2>
    <p>
      <span>{type}</span>
    </p>
    <p>{description}</p>
  </Container>
);

export default StartupCard;
