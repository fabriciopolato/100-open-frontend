import React, { FormHTMLAttributes } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { FormContainer, Header, Content } from './styles';
import { Button } from '../..';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
  buttonText?: string;
  withBackArrow?: boolean;
}

const Form: React.FC<IProps> = ({
  withBackArrow = false,
  buttonText = 'adicionar startup',
  children,
  ...rest
}) => (
  <FormContainer {...rest}>
    <Header>
      {withBackArrow && <MdKeyboardArrowLeft size={35} />}
      <h1>startups</h1>
    </Header>
    <Content>
      {children}
      <Button>{buttonText}</Button>
    </Content>
  </FormContainer>
);

export default Form;
