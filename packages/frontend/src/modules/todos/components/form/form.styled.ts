import { styled } from 'styled-components';
import { COLORS } from '../../../theme';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px
  align-items: center;
  width: 500px;
  background-color: ${COLORS.background_color};
  padding: 30px;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
