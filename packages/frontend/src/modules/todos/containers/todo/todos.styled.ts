import styled from 'styled-components';
import { BREAK_POINTS } from '../../../theme';

export const StyledTodoPage = styled.div`
  padding: 40px 100px;

  @media (min-width: ${BREAK_POINTS.tablet}) {
    padding: 40px 50px;
  }

  @media (max-width: ${BREAK_POINTS.mobile}) {
    padding: 20px;
  }
`;
