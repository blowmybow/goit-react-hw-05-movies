import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style: none;
  height: auto;
  width: calc((100% - 20px) / 2);
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.37);
  border: 1px solid rgba(50, 94, 116, 0);
  transform: scale(1);
  transition: transform 250ms linear, border 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transition: all 0.25s;
    scale: 1.03;
  }
  @media screen and (min-width: 768px) {
    width: calc((100% - 60px) / 4);
  }
  @media screen and (min-width: 1200px) {
    width: calc((100% - 100px) / 6);
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
`;

export const InfoText = styled.p`
  margin: 0;
  color: #ebf8e1;
  font-size: 14px;
  line-height: calc(18 / 14);
`;
export const SpanText = styled.span`
  font-weight: 700;
`;
