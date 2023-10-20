import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';
import Auth from './pages/auth';
import { ForgotPasswordPage } from './pages/forgot-password';
import HomePageContainer from './pages/home';
import { MyProfilePage } from './pages/my-profile';
import { RecoverPasswordPage } from './pages/recover-password';
import Todo from './pages/todo';

export const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={APP_KEYS.ROUTER_KEYS.ROOT} element={<HomePageContainer />} />
      <Route path={`/${APP_KEYS.ROUTER_KEYS.TODO}/:id`} element={<Todo />} />
      <Route path={APP_KEYS.ROUTER_KEYS.AUTHORIZED} element={<Auth />} />
      <Route
        path={`${APP_KEYS.ROUTER_KEYS.AUTHORIZED}/${APP_KEYS.ROUTER_KEYS.FORGOT_PASSWORD}`}
        element={<ForgotPasswordPage />}
      />
      <Route path={APP_KEYS.ROUTER_KEYS.MY_PROFILE} element={<MyProfilePage />} />
      <Route
        path={`${APP_KEYS.ROUTER_KEYS.AUTHORIZED}/${APP_KEYS.ROUTER_KEYS.RECOVER_PASSPORT}/:link`}
        element={<RecoverPasswordPage />}
      />
    </Routes>
  </BrowserRouter>
);
