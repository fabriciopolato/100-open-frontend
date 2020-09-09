import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { Link } from 'react-router-dom';
import { Container } from './styles';

interface IProps {
  withBackArrow?: boolean;
}

const Header: React.FC<IProps> = ({ withBackArrow = false }) => {
  return (
    <Container>
      {withBackArrow && (
        <Link to="/">
          <MdKeyboardArrowLeft size={35} />
        </Link>
      )}
      <h1>startups</h1>
    </Container>
  );
};

export default Header;
