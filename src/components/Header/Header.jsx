import React from 'react';
import {
  Container,
  HeaderWrapper,
  Navigation,
  NavigationLink,
} from './Header.styled.jsx';

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Navigation>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/search">Movies</NavigationLink>
        </Navigation>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
