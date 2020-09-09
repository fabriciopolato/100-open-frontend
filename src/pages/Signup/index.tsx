import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Container } from './styles';
import { SignForm } from '../../components/Forms';

const Signup: React.FC = () => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isSubmitting,
    resetForm,
    status,
    setStatus,
  } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: () => {
      console.log(values, 'deu bom!');
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
        buttonText="Cadastrar"
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
        values={values}
        errors={errors}
        touched={touched}
      />
    </Container>
  );
};

export default Signup;
