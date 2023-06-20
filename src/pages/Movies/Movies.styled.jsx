import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 320px;
  min-height: 70vh;
  margin: 0 auto;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const Main = styled.main`
  flex-grow: 1;
`;
