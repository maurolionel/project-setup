import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { darken } from 'polished';

const StyledNav = styled.nav`
  align-self: stretch;
  display: flex;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
  text-decoration: none;
  transition: 0.05s background-color linear;

  &:hover {
    background-color: ${({ theme }) => darken(0.02, theme.whiteGray)}
  }
  &:active, &.active {
    background-color: ${({ theme }) => darken(0.04, theme.whiteGray)}
  }
`;

const Nav = () => (
  <StyledNav>
    <StyledNavLink to="/productos">Productos</StyledNavLink>
    <StyledNavLink to="/ofertas">Ofertas</StyledNavLink>
    <StyledNavLink to="/soporte">Soporte</StyledNavLink>
    <StyledNavLink to="/contacto">Contacto</StyledNavLink>
  </StyledNav>
);

export default Nav;
