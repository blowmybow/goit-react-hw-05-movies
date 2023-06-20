import styled from '@emotion/styled';

export const ReviewInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 15px;
  padding: 0;
`;

export const ReviewInfoItem = styled.li`
  padding: 18px;
  border-radius: 10px;
  border: 3px solid rgba(50, 94, 116, 0);
  transform: scale(1);
  transition: transform 250ms linear, border 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transition: all 0.25s;
    scale: 1.03;
  }
`;

export const ReviewInfoTitle = styled.h2`
  margin-bottom: 15px;
  font-width: 600;
  font-size: 28px;
`;
export const ReviewInfoText = styled.p`
  margin-bottom: 15px;
  font-size: 18px;
  line-height: calc(22 / 18);
`;
