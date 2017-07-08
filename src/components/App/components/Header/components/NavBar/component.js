import React from 'react';
import styled from 'styled-components';
import Logo from '../../../../../../components/Logo';
import Nav from './components/Nav';
import SearchBar from '../../../../../../components/SearchBar';

const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.grayLighter};
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
