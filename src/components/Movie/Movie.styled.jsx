import styled from '@emotion/styled';

export const Main = styled.main`
  padding-top: 40px;
  padding-bottom: 40px;
  flex-grow: 1;
`;

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

export const MovieContainerInfo = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 270px;
  }
  @media screen and (min-width: 1200px) {
    width: 320px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const MovieInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MovieInfoTitle = styled.h1`
  margin-bottom: 15px;
  font-width: 700;
  font-size: 32px;
`;
export const OverviewTitle = styled.h2`
  margin-bottom: 15px;
  font-width: 600;
  font-size: 28px;
`;
export const OverviewText = styled.p`
  margin-bottom: 15px;
  font-size: 18px;
  line-height: calc(22 / 18);
`;
export const GenresTitle = styled.h2`
  margin-bottom: 15px;
  font-width: 600;
  font-size: 28px;
`;
export const GenresText = styled.p`
  margin-bottom: 15px;
  font-size: 18px;
  line-height: calc(22 / 18);
`;
export const Rate = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 40px;
  background-color: #3f87a6;
  color: #f69d3c;
  font-size: 20px;
  border-radius: 7px;
`;
