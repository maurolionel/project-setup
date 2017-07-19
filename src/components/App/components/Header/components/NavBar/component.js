import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import Logo from '../../../../../../components/Logo';
import Nav from './components/Nav';
import Input from '../../../../../../components/Input';

const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 0.5rem;
  background-color: ${({ theme }) => theme.base};
  border-bottom: 1px solid ${({ theme }) => darken(0.04, theme.whiteGray)};
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
