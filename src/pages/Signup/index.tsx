import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import { SignForm } from '../../components/Forms';
import { useAuth } from '../../hooks/auth';
import { useCompany } from '../../hooks/company';

const Signup: React.FC = () => {
  const history = useHistory();
  const { signUp } = useAuth();
  const { setIsLoading } = useCompany();

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldError,
  } = useFormik({
    initialValues: {
      username: '',
      password: '',
      general: '',
    },
    onSubmit: async ({ username, password }) => {
      setIsLoading(true);

      try {
        await signUp({ username, password });
      } catch (error) {
        setFieldError('general', error.message);
      }
      setTimeout(() => {
        setIsLoading(false);
        history.push('/');
      }, 1500);
    },
    validationSchema: yup.object().shape({
      username: yup.string().required('Username é obrigatório'),
      password: yup
        .string()
        .required('Senha é obrigatória')
        .min(6, 'Mínimo de 6 dígitos'),
    }),
  });

  return (
    <Container>
      {/* <h1>SIGN UP</h1> */}
      <SignForm
        signText="SIGN UP"
        buttonText="Cadastrar"
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSignSubmit={handleSubmit}
        values={values}
        errors={errors}
        touched={touched}
      />
    </Container>
  );
};

export default Signup;
