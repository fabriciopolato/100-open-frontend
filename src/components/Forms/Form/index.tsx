import React, { FormHTMLAttributes } from 'react';

import { FormContainer, Header, Content } from './styles';
import { Button } from '../..';

const Form: React.FC<FormHTMLAttributes<HTMLFormElement>> = ({
  children,
  ...rest
}) => (
  <FormContainer {...rest}>
    <Header>
      <h1>startups</h1>
    </Header>
    <Content>
      {children}
      <Button>adicionar startups</Button>
    </Content>
  </FormContainer>
);

export default Form;
