import React, { useState } from 'react';

import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import BounceLoader from 'react-spinners/BounceLoader';
import { Container, StartupInfo, Form, StyledLoader } from './styles';
import { Input, Button, Header } from '../..';
import { useCompany } from '../../../hooks/company';
import { api } from '../../../services/api';

const EditForm: React.FC = () => {
  const [isLoadingEdit, setIsLoadingEdit] = useState(false);
  const { handleInactivity, currentCompany, isLoading } = useCompany();
  const { name, type, description, _id, votesForInactivity } = currentCompany;

  const userId = localStorage.getItem('open:userId');

  const history = useHistory();

  const { handleChange, handleBlur, handleSubmit, values } = useFormik({
    initialValues: {
      companyType: type,
      companyLocation: '',
    },
    onSubmit: async ({ companyType, companyLocation }) => {
      setIsLoadingEdit(true);
      try {
        await api.put(`/company/${_id}`, {
          type: companyType,
          location: companyLocation,
        });
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setIsLoadingEdit(false);
        history.push('/');
      }, 1500);
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
        {isLoading ? (
          <StyledLoader>
            <BounceLoader size={60} color="#45aaf2" />
          </StyledLoader>
        ) : (
          !votesForInactivity.includes(userId as string) && (
            <Button
              onClick={() => handleInactivity(_id)}
              type="button"
              backgroundColor="#f24545"
            >
              marcar como inativa
            </Button>
          )
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
        {isLoadingEdit ? (
          <StyledLoader>
            <BounceLoader size={60} color="#45aaf2" />
          </StyledLoader>
        ) : (
          <Button type="submit">editar startup</Button>
        )}
      </Form>
    </Container>
  );
};

export default EditForm;
