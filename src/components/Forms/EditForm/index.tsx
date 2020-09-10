import React from 'react';

import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { Container, StartupInfo, Form } from './styles';
import { Input, Button, Header } from '../..';
import { useCompany } from '../../../hooks/company';
import { api } from '../../../services/api';

const EditForm: React.FC = () => {
  const { handleInactivity, currentCompany } = useCompany();

  const { name, type, description, _id, votesForInactivity } = currentCompany;
  const userId = localStorage.getItem('open:userId');

  const history = useHistory();

  const { handleChange, handleBlur, handleSubmit, values } = useFormik({
    initialValues: {
      companyType: type,
      companyLocation: '',
    },
    onSubmit: async ({ companyType, companyLocation }) => {
      try {
        await api.put(`/company/${_id}`, {
          type: companyType,
          location: companyLocation,
        });
        history.push('/');
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Container>
      <Header withBackArrow />
      <StartupInfo>
        <h2>{name}</h2>
        <p>
          <span>{type}</span>
        </p>
        <p>{description}</p>
        {!votesForInactivity.includes(userId as string) && (
          <Button
            onClick={() => handleInactivity(_id)}
            type="button"
            backgroundColor="#f24545"
          >
            marcar como inativa
          </Button>
        )}
      </StartupInfo>
      <Form onSubmit={handleSubmit}>
        <fieldset>
          <legend>editar os dados da startup</legend>
          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            name="companyType"
            type="text"
            label="Tipo"
            value={values.companyType}
          />
          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            name="companyLocation"
            type="text"
            label="Localização"
            value={values.companyLocation}
          />
        </fieldset>
        <Button type="submit">editar startup</Button>
      </Form>
    </Container>
  );
};

export default EditForm;
