import { Button, TextField } from '@mui/material';
import React from 'react';
import { FormPosition, Title, FormContainer } from '../auth/auth.styled';
import { recoverForm } from '../../utils/formik.user';

export const RecoverPasswordComponent: React.FC = React.memo(() => {
  const formik = recoverForm();
  const { values, handleSubmit, handleChange, handleBlur, errors, touched } = formik;

  return (
    <FormPosition>
      <Title>Recover your password</Title>
      <form className="form" onSubmit={handleSubmit}>
        <FormContainer>
          <TextField
            fullWidth
            id="password"
            name="password"
            label="New Password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <TextField
            fullWidth
            id="confirm"
            name="confirm"
            label="Confirm Password"
            type="password"
            value={values.confirm}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.confirm && Boolean(errors.confirm)}
            helperText={formik.touched.confirm && formik.errors.confirm}
          />

          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </FormContainer>
      </form>
    </FormPosition>
  );
});
