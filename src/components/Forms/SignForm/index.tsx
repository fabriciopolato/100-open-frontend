import React from 'react';
import { Container } from './styles';
import { Input, Button } from '../..';
import { ISignFormProps } from '../../../interfaces';

const SignForm: React.FC<ISignFormProps> = ({
  buttonText,
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  touched,
  errors,
}) => {
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          label="Username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
        />
        {errors.username && touched.username ? <p>{errors.username}</p> : null}
        <Input
          type="password"
          name="password"
          label="Senha"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password ? <p>{errors.password}</p> : null}
        <Button type="submit">{buttonText}</Button>
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </form>
    </Container>
  );
};

export default SignForm;
