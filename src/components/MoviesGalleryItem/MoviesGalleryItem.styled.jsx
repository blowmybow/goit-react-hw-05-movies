import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  height: auto;
  width: 280px;
  text-align: center;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.37);
  border: 1px solid rgba(50, 94, 116, 0);
  transform: scale(1);
  transition: transform 250ms linear, border 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transition: all 0.25s;
    scale: 1.03;
  }
`;

export const GalleryImage = styled.img``;

export const MovieTitle = styled.p`
  margin: 0;
  padding: 10px;
  color: #ebf8e1;
  font-size: 20px;
  line-height: calc(28 / 20);
`;
