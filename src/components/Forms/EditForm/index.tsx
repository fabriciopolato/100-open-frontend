import React from 'react';

import { Container, StartupInfo, Form } from './styles';
import { Input, Button, Header } from '../..';

const EditForm: React.FC = () => (
  <Container>
    <Header withBackArrow />
    <StartupInfo>
      <h2>Nome da Empresa</h2>
      <p>Descrição</p>
      <Button backgroundColor="#f24545">marcar como inativa</Button>
    </StartupInfo>
    <Form>
      <fieldset>
        <legend>editar os dados da startup</legend>
        <Input name="type" type="text" label="Tipo" />
        <Input name="location" type="text" label="Localização" />
      </fieldset>
      <Button>editar startup</Button>
    </Form>
  </Container>
);

export default EditForm;
