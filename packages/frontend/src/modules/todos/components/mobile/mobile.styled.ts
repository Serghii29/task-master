import styled from 'styled-components';
import { COLORS } from '../../../theme';
import { SIZES, WEIGHTS } from '../../../theme/fonts.const';

export const ElementContainer = styled.div`
  background-color: ${COLORS.background_color};
  padding: 15px;
`;

export const StyledTitle = styled.p`
  font-size: ${SIZES.m};
  font-weight: ${WEIGHTS.bold};
  margin-bottom: 15px;
`;

export const StyledDescription = styled.span`
  display: block;
  margin-bottom: 25px;
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
