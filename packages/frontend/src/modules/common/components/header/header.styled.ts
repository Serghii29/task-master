import { AppBar, Toolbar } from '@mui/material';
import { styled } from 'styled-components';
import { COLORS } from '../../../theme';

export const AppBarStyled = styled(AppBar)`
  background: ${COLORS.white};
  box-shadow: none;
`;

export const RightAlignedToolbar = styled(Toolbar)`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;
