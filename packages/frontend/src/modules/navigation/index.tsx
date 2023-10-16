import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';
import HomePageContainer from './pages/home';
import Todo from './pages/todo';

export const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={APP_KEYS.ROUTER_KEYS.ROOT} element={<HomePageContainer />} />
      <Route path={`/${APP_KEYS.ROUTER_KEYS.TODO}/:id`} element={<Todo />} />
    </Routes>
  </BrowserRouter>
);
