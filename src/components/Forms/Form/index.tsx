import React, { FormHTMLAttributes } from 'react';

import { FormContainer, Content } from './styles';
import { Header } from '../..';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
  withBackArrow?: boolean;
}

const Form: React.FC<IProps> = ({
  withBackArrow = false,
  children,
  ...rest
}) => (
  <FormContainer {...rest}>
    <Header withBackArrow={withBackArrow} />
    <Content>{children}</Content>
  </FormContainer>
);

export default Form;
