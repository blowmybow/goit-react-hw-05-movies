import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const ButtonBack = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px;
  height: 40px;
  width: 140px;
  text-decoration: none;
  font-size: 24px;
  text-align: center;
  background: transparent;
  color: #f69d3c;
  border-radius: 8px;

  transition: color 250ms linear, background-color 250ms linear;
  &:hover,
  &:focus-visible {
    background-color: #f69d3c;
    color: #ebf8e1;
  }
`;
