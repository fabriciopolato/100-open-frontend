import React from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import { Container, StyledError, StyledLoader } from './styles';
import { Input, Button } from '../..';
import { ISignFormProps } from '../../../interfaces';
import { useCompany } from '../../../hooks/company';

const SignForm: React.FC<ISignFormProps> = ({
  signText,
  buttonText,
  handleSignSubmit,
  handleChange,
  handleBlur,
  values,
  touched,
  errors,
}) => {
  const { isLoading } = useCompany();

  return (
    <Container>
      <h1>{signText}</h1>
      <form onSubmit={handleSignSubmit}>
        <Input
          name="username"
          label="Username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
        />
        {errors.username && touched.username ? (
          <StyledError>{errors.username}</StyledError>
        ) : null}
        <Input
          type="password"
          name="password"
          label="Senha"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password ? <p>{errors.password}</p> : null}
        {isLoading ? (
          <StyledLoader>
            <BounceLoader size={60} color="#45aaf2" />
          </StyledLoader>
        ) : (
          <Button type="submit">{buttonText}</Button>
        )}
      </form>
    </Container>
  );
};

export default SignForm;
