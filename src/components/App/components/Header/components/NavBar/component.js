import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import Logo from '../../../../../../components/Logo';
import Nav from './components/Nav';
import SearchBar from '../../../../../../components/SearchBar';

const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 0.5rem;
  background-color: ${({ theme }) => theme.whiteGray};
  border-bottom: 1px solid ${({ theme }) => darken(0.04, theme.whiteGray)};
`;

const StyledSearchBar = styled(SearchBar)`
  margin-left: auto;
`;

const NavBar = () => (
  <StyledNavBar>
    <Logo />
    <Nav />
    <StyledSearchBar />
  </StyledNavBar>
);

export default NavBar;
