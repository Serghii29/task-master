import { InputBase, Toolbar, AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../../theme';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: COLORS.hover_text
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: COLORS.black,
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}));

export const TransparentAppBar = styled(AppBar)`
  background: transparent;
  box-shadow: none;
`;

export const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;
