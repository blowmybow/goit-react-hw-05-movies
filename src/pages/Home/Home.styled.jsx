import styled from '@emotion/styled';

export const Title = styled.h1`
  color: #f69d3c;
  margin-top: 30px;
  margin-left: 45px;
`;

export const Container = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 0 18px;
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;
