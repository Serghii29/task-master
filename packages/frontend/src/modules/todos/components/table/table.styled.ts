import { tableCellClasses, TableCell, TableRow, styled } from '@mui/material';
import { COLORS } from '../../../theme';
import { SIZES, WEIGHTS } from '../../../theme/fonts.const';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: COLORS.white,
    fontSize: SIZES.m,
    fontWeight: WEIGHTS.bold
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: SIZES.s,
    transition: 'background-color 0.3s, color 0.3s',
    backgroundColor: COLORS.background_color,
    '&:hover': {
      cursor: 'pointer',
      color: COLORS.hover_text
    }
  }
}));

export const StyledTableRow = styled(TableRow)(() => ({
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));
