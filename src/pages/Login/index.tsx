import React from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import { SignForm } from '../../components';
import { useAuth } from '../../hooks/auth';
import { useCompany } from '../../hooks/company';

const Login: React.FC = () => {
  const history = useHistory();
  const { signIn } = useAuth();
  const { setIsLoading } = useCompany();

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async ({ username, password }) => {
      setIsLoading(true);

      await signIn({ username, password });

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
      <SignForm
        linkText="signup"
        signText="LOGIN"
        buttonText="Entrar"
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

export default Login;
