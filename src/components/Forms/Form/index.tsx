import React, { FormHTMLAttributes } from 'react';

import { FormContainer, Content } from './styles';
import { Button, Header } from '../..';

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
    <Header withBackArrow={withBackArrow} />
    <Content>
      {children}
      <Button>{buttonText}</Button>
    </Content>
  </FormContainer>
);

export default Form;
