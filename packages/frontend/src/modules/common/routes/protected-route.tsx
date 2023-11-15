import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_KEYS } from '../consts';

type Props = {
  children: JSX.Element;
};

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const token = localStorage.getItem(APP_KEYS.STORAGE_KEYS.TOKEN);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate(`/${APP_KEYS.ROUTER_KEYS.AUTHORIZED}`);
    }
  });

  return children;
};
