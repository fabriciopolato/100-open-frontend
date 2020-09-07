import React from 'react';

import { Container } from './styles';
import Form from '../Form';
import { Input } from '../..';

const AddForm: React.FC = () => (
  <Container>
    <Form>
      <Input name="name" type="text" label="Nome da startup" />
      <Input name="type" type="text" label="Tipo" />
      <Input name="location" type="text" label="Localização" />
    </Form>
  </Container>
);

export default AddForm;
