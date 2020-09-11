import React, { useState, ChangeEvent } from 'react';

import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import BounceLoader from 'react-spinners/BounceLoader';
import {
  Container,
  StartupInfo,
  Form,
  StyledLoader,
  StyledCities,
  StyledButton,
} from './styles';
import { Input, Button, Header } from '../..';
import { useCompany } from '../../../hooks/company';
import { api, geoNamesApi } from '../../../services/api';
import { IGeoNamesLocation, GeoNamesApiResponse } from '../../../interfaces';
import { useGeoNames } from '../../../hooks/geonames';

const EditForm: React.FC = () => {
  const [isLoadingEdit, setIsLoadingEdit] = useState(false);
  const { handleInactivity, currentCompany, isLoading } = useCompany();
  const { setGeoNamesCities, geoNamesCities } = useGeoNames();

  const {
    name,
    type,
    description,
    _id,
    votesForInactivity,
    location,
  } = currentCompany;

  const userId = localStorage.getItem('open:userId');

  const history = useHistory();

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: {
      companyType: type,
      companyLocation: `${location.city}, ${location.state} - ${location.country}`,
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

  const handleGeoNamesApi = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setGeoNamesCities([]);
    try {
      if (value.length >= 3) {
        const response = await geoNamesApi.get('', {
          params: { q: value },
        });

        const formattedData: IGeoNamesLocation[] = response.data.geonames.map(
          (newLocation: GeoNamesApiResponse) => {
            return {
              id: newLocation.geonameId,
              city: newLocation.name,
              country: newLocation.countryName,
              state: newLocation.adminCodes1.ISO3166_2,
            };
          },
        );
        console.log(response.data.geonames);

        setGeoNamesCities(formattedData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Header withBackArrow />
      <StartupInfo>
        <h2>{name}</h2>
        <p>
          <span>{type}</span> {location.city}, {location.state} -{' '}
          {location.country}
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
            onChange={event => {
              handleChange(event);
              handleGeoNamesApi(event);
            }}
            onBlur={handleBlur}
            name="companyLocation"
            type="text"
            label="Localização"
            value={values.companyLocation}
          />
          {geoNamesCities.length ? (
            <StyledCities>
              {geoNamesCities.map(newLocation => (
                <li key={newLocation.id}>
                  <StyledButton
                    onClick={() => {
                      setFieldValue(
                        'companyLocation',
                        `${newLocation.city}, ${newLocation.state} - ${newLocation.country}`,
                      );
                    }}
                    type="button"
                  >
                    {newLocation.city}, {newLocation.state} -{' '}
                    {newLocation.country}
                  </StyledButton>
                </li>
              ))}
            </StyledCities>
          ) : null}
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
