import React from 'react';
import { BsCircleFill } from 'react-icons/bs';

import { Container } from './styles';
import { ILocation } from '../../interfaces';

interface IProps {
  name: string;
  description?: string;
  type: string;
  isActive: boolean;
  location: ILocation;
}

const StartupCard: React.FC<IProps> = ({
  name,
  description,
  type,
  isActive,
  location,
}) => (
  <Container isActive={isActive}>
    <BsCircleFill size={12} color="#05eb00" />
    <h2>{name}</h2>
    <p>
      <span>{type}</span> {location.city}, {location.state} - {location.country}
    </p>
    <p>{description}</p>
  </Container>
);

export default StartupCard;
