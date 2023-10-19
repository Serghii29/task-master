import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import { ContainerDiv, GreenHoverButton } from '../../../todos/components/action/actions.styled';
import {
  TransparentAppBar,
  ToolbarStyled,
  Search,
  SearchIconWrapper,
  StyledInputBase
} from './filter-search.styled';

export const FilterAndSearchComponent: React.FC = React.memo(() => (
  <Box sx={{ flexGrow: 1 }}>
    <TransparentAppBar position="static">
      <ToolbarStyled>
        <ContainerDiv>
          <GreenHoverButton>All</GreenHoverButton>
          <GreenHoverButton>Private</GreenHoverButton>
          <GreenHoverButton>Public</GreenHoverButton>
          <GreenHoverButton>Completed</GreenHoverButton>
        </ContainerDiv>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </Search>
      </ToolbarStyled>
    </TransparentAppBar>
  </Box>
));
