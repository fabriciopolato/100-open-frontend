import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { Container } from './styles';

interface IProps {
  withBackArrow?: boolean;
}

const Header: React.FC<IProps> = ({ withBackArrow = false }) => {
  return (
    <Container>
      {withBackArrow && <MdKeyboardArrowLeft size={35} />}
      <h1>startups</h1>
    </Container>
  );
};

export default Header;
