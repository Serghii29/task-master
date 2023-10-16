import { Button, Switch, styled } from '@mui/material';
import { COLORS } from '../../../theme';

export const ContainerDiv = styled('div')`
  display: flex;
  gap: 20px;
`;

export const GreenHoverButton = styled(Button)`
  transition: 'background-color 0.3s, color 0.3s';
  &:hover {
    background-color: ${COLORS.background_color};
    color: ${COLORS.green};
  }
`;

export const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .Mui-checked': {
    color: COLORS.green,
    '& .MuiSwitch-thumb': {
      backgroundColor: COLORS.green
    },
    '& + .MuiSwitch-track': {
      backgroundColor: theme.palette.mode === 'dark' ? '#4caf50' : '#7eff8c'
    }
  }
}));
