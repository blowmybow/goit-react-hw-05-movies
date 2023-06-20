import styled from '@emotion/styled';
export const Container = styled.div`
  max-width: 320px;
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
export const FooterWrapper = styled.footer`
  padding: 20px;
  text-align: center;
  color: black;
  font-size: 18px;
  box-shadow: rgba(0, 0, 0, 0.5) 1px -5px 7px 0px;
`;
