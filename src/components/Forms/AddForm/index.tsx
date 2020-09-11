import React, { ChangeEvent, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import BounceLoader from 'react-spinners/BounceLoader';
import * as yup from 'yup';
import { Container, StyledLoader } from './styles';
import Form from '../Form';
import { Input, Button } from '../..';
import { api, geoNamesApi } from '../../../services/api';
import { useCompany } from '../../../hooks/company';

interface IGeoLocation {
  name: string;
  countryName: string;
  adminCodes1: {
    ISO3166_2: string;
  };
}

const AddForm: React.FC = () => {
  const history = useHistory();
  const { isLoading, setIsLoading } = useCompany();

  const [geoNamesCities, setGeoNamesCities] = useState<IGeoLocation[]>([]);

  const handleGeoNamesApi = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setGeoNamesCities([]);
    try {
      if (value.length >= 3) {
        const response = await geoNamesApi.get('', {
          params: { q: value },
        });

        const formattedData = response.data.geonames.map(
          (location: IGeoLocation) => {
            return {
              name: location.name,
              countryName: location.countryName,
              adminCodes1: location.adminCodes1.ISO3166_2,
            };
          },
        );

        setGeoNamesCities(formattedData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      name: '',
      description: '',
      type: '',
      location: '',
    },
    onSubmit: async ({ name, description, type, location }) => {
      setIsLoading(true);
      try {
        await api.post('/company', {
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
    validationSchema: yup.object().shape({
      name: yup.string().required('Nome é um campo obrigatório'),
      description: yup
        .string()
        .max(140, 'Você ultrapassou o limite de 140 caracteres'),
      type: yup.string().required('Tipo é um campo obrigatório'),
      location: yup.string().required('Localização é um campo obrigatório'),
    }),
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
        {errors.name && touched.name ? <p>{errors.name}</p> : null}
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          name="description"
          type="text"
          label="Descrição"
          value={values.description}
        />
        {errors.description && touched.description ? (
          <p>{errors.description}</p>
        ) : null}

        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          name="type"
          type="text"
          label="Tipo"
          value={values.type}
        />
        {errors.type && touched.type ? <p>{errors.type}</p> : null}

        <Input
          onChange={event => {
            handleChange(event);
            handleGeoNamesApi(event);
          }}
          onBlur={handleBlur}
          name="location"
          type="text"
          label="Localização"
          value={values.location}
        />
        {}
        {errors.location && touched.location ? <p>{errors.location}</p> : null}

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
