import { Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GreenHoverButton } from '../../../todos/components/action/actions.styled';
import { logout } from '../../../user/utils/fetch.user';
import { APP_KEYS } from '../../consts';
import { AppBarStyled, RightAlignedToolbar } from './header.styled';

export const HeaderComponent: React.FC = React.memo(() => {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate(APP_KEYS.ROUTER_KEYS.MY_PROFILE);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Box>
      <AppBarStyled position="static">
        <RightAlignedToolbar>
          <GreenHoverButton onClick={handleProfile} size="medium" variant="text">
            My profile
          </GreenHoverButton>
          <GreenHoverButton onClick={handleLogout} size="medium" variant="text">
            Log Out
          </GreenHoverButton>
        </RightAlignedToolbar>
      </AppBarStyled>
    </Box>
  );
});
