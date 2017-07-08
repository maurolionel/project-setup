import React from 'react';
import styled from 'styled-components';
import Logo from '../../../../../../components/Logo';
import Nav from './components/Nav';
import SearchBar from '../../../../../../components/SearchBar';

const StyledNavBar = styled.div`
  display: flex;
`;

const NavBar = () => (
  <StyledNavBar>
    <Logo />
    <Nav />
    <SearchBar />
  </StyledNavBar>
);

export default NavBar;
