import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 0 15px;
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 30px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const HeaderWrapper = styled.header`
  padding-top: 25px;
  height: 80px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 7px 0px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 18px;
`;
export const NavigationLink = styled(NavLink)`
  padding: 14px;
  height: 32px;
  width: 74px;
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
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
