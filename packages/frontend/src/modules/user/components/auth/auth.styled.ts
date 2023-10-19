import { styled } from 'styled-components';
import { COLORS } from '../../../theme';

export const FormPosition = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 30px;

  max-width: 500px;
  width: 100%;
  background-color: ${COLORS.background_color};
  padding: 30px;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  margin: auto;
`;
