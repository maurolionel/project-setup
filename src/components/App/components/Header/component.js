import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';

const TopBarWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary};
`;

const NavBarWrapper = styled.div`
  background-color: ${({ theme }) => theme.base};
  border-bottom: 1px solid ${({ theme }) => darken(0.04, theme.whiteGray)};
`;

const Header = () => (
  <header>
    <TopBarWrapper>
      <TopBar />
    </TopBarWrapper>
    <NavBarWrapper>
      <NavBar />
    </NavBarWrapper>
  </header>
);

export default Header;
