import { Button, TextField } from '@mui/material';
import React from 'react';
import { FormPosition, Title, FormContainer } from '../auth/auth.styled';
import { profileForm } from '../../utils/formik.user';

export const MyProfile: React.FC = React.memo(() => {
  const formik = profileForm();
  const { values, handleSubmit, handleChange, handleBlur, errors, touched } = formik;

  return (
    <FormPosition>
      <Title>Change your password</Title>
      <form className="form" onSubmit={handleSubmit}>
        <FormContainer>
          <TextField
            fullWidth
            id="old_password"
            name="old_password"
            label="Old Password"
            type="password"
            value={values.old_password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.old_password && Boolean(errors.old_password)}
            helperText={formik.touched.old_password && formik.errors.old_password}
          />

          <TextField
            fullWidth
            id="new_password"
            name="new_password"
            label="New Password"
            type="password"
            value={values.new_password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.new_password && Boolean(errors.new_password)}
            helperText={formik.touched.new_password && formik.errors.new_password}
          />

          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </FormContainer>
      </form>
    </FormPosition>
  );
});
