import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { APP_KEYS } from '../consts';

export const ProtectedRoute: React.FC = () => {
  const token = localStorage.getItem(APP_KEYS.STORAGE_KEYS.TOKEN);

  if (!token) {
    return <Navigate to={APP_KEYS.ROUTER_KEYS.AUTHORIZED} replace />;
  }

  return <Outlet />;
};
