import React from 'react';

import { Container } from './styles';
import Form from '../Form';
import { Input, Button } from '../..';

const AddForm: React.FC = () => (
  <Container>
    <Form withBackArrow>
      <Input name="name" type="text" label="Nome da startup" />
      <Input name="description" type="text" label="Descrição" />
      <Input name="type" type="text" label="Tipo" />
      <Input name="location" type="text" label="Localização" />
      <Button type="submit">adicionar startup</Button>
    </Form>
  </Container>
);

export default AddForm;
