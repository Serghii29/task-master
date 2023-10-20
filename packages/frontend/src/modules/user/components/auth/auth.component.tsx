/* eslint-disable react/no-unescaped-entities */
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userForm } from '../../utils/formik.user';
import { GreenHoverButton } from '../../../todos/components/action/actions.styled';
import { FormPosition, Title, FormContainer, QuestionContainer } from './auth.styled';
import { APP_KEYS } from '../../../common/consts';

export const AuthComponent: React.FC = React.memo(() => {
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const handleIsLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleForgotPassword = () => {
    navigate(APP_KEYS.ROUTER_KEYS.FORGOT_PASSWORD);
  };

  const formik = userForm(isLogin);
  const { values, handleSubmit, handleChange, handleBlur, errors, touched } = formik;

  return (
    <FormPosition>
      <Title>{isLogin ? 'Login' : 'Registration'}</Title>
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

          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          {!isLogin && (
            <TextField
              fullWidth
              id="confirm"
              name="confirm"
              label="Confirm password"
              type="password"
              value={values.confirm}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.confirm && Boolean(errors.confirm)}
              helperText={formik.touched.confirm && formik.errors.confirm}
            />
          )}

          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </FormContainer>
      </form>

      <QuestionContainer>
        {isLogin ? (
          <GreenHoverButton onClick={handleIsLogin} size="small" variant="text">
            You don't have an account?
          </GreenHoverButton>
        ) : (
          <GreenHoverButton onClick={handleIsLogin} size="small" variant="text">
            Already have an account?
          </GreenHoverButton>
        )}

        <GreenHoverButton onClick={handleForgotPassword} size="small" variant="text">
          forgot password?
        </GreenHoverButton>
      </QuestionContainer>
    </FormPosition>
  );
});
