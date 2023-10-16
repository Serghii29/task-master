import { Paper, styled } from '@mui/material';
import { COLORS } from '../../../theme';
import { WEIGHTS } from '../../../theme/fonts.const';

export const StyledPaper = styled(Paper)`
  padding: 20px;
  background-color: ${COLORS.background_color};

  h3 {
    font-weight: ${WEIGHTS.bold};
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 15px;
  }
`;
