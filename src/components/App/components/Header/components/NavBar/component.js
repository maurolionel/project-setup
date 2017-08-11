import React from 'react';
import styled from 'styled-components';
import Logo from '../../../../../../components/Logo';
import Nav from './components/Nav';
import Input from '../../../../../../components/Input';

const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  max-width: ${({ theme }) => theme.desktop}px;
  height: 60px;
  padding: 0 0.5rem;
  margin: 0 auto;
`;

const SearchBarWrapper = styled.div`
  margin-left: auto;
`;

const NavBar = () => (
  <StyledNavBar>
    <Logo />
    <Nav />
    <SearchBarWrapper>
      <Input type="search" placeholder="Buscar..." />
    </SearchBarWrapper>
  </StyledNavBar>
);

export default NavBar;
