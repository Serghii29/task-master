import { styled } from 'styled-components';

export const Container = styled.div`
  padding: 200px;
  height: 100vh;
  max-width: 1220px;

  @media (max-width: 1200px) {
    padding: 150px;
  }

  @media (max-width: 768px) {
    padding: 50px;
  }

  @media (max-width: 425px) {
    padding: 20px;
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.p`
  margin-bottom: 20px;
`;

export const Text = styled.span`
  display: block;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Header = styled.h1`
  margin-bottom: 40px;
`;
