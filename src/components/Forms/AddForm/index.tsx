import React from 'react';

import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import BounceLoader from 'react-spinners/BounceLoader';
import { Container, StyledLoader } from './styles';
import Form from '../Form';
import { Input, Button } from '../..';
import { api } from '../../../services/api';
import { useCompany } from '../../../hooks/company';

const AddForm: React.FC = () => {
  const history = useHistory();
  const { isLoading, setIsLoading } = useCompany();

  const { handleChange, handleBlur, handleSubmit, values } = useFormik({
    initialValues: {
      name: '',
      description: '',
      type: '',
      location: '',
    },
    onSubmit: async ({ name, description, type, location }) => {
      setIsLoading(true);
      try {
        await api.post(`/company`, {
          name,
          description,
          type,
          location,
        });
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setIsLoading(false);
        history.push('/');
      }, 1500);
    },
  });

  return (
    <Container>
      <Form onSubmit={handleSubmit} withBackArrow>
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          name="name"
          type="text"
          label="Nome da startup"
          value={values.name}
        />
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          name="description"
          type="text"
          label="Descrição"
          value={values.description}
        />
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          name="type"
          type="text"
          label="Tipo"
          value={values.type}
        />
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          name="location"
          type="text"
          label="Localização"
          value={values.location}
        />
        {isLoading ? (
          <StyledLoader>
            <BounceLoader size={60} color="#45aaf2" />
          </StyledLoader>
        ) : (
          <Button type="submit">adicionar startup</Button>
        )}
      </Form>
    </Container>
  );
};

export default AddForm;
