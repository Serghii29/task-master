import { TextField, Button } from '@mui/material';
import React from 'react';
import { forgotForm } from '../../utils/formik.user';
import { FormPosition, FormContainer, Title } from '../auth/auth.styled';

export const ForgotPassword: React.FC = React.memo(() => {
  const formik = forgotForm();
  const { values, handleSubmit, handleChange, handleBlur, errors, touched } = formik;

  return (
    <FormPosition>
      <Title>Enter your email</Title>
      <form className="form" onSubmit={handleSubmit}>
        <FormContainer>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </FormContainer>
      </form>
    </FormPosition>
  );
});
