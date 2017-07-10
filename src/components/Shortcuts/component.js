import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

const StyledShortcuts = styled.article`
  display: flex;
`;

const StyledLink = styled(Link)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 230px;
  color: ${({ theme }) => theme.base};
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;

  &:nth-child(1) {
    background-color: ${({ theme }) => lighten(0.03, theme.primary)};
  }
  &:nth-child(2) {
    background-color: ${({ theme }) => theme.primary};
  }
  &:nth-child(3) {
    background-color: ${({ theme }) => darken(0.03, theme.primary)};
  }
`;

const Shortcuts = () => (
  <StyledShortcuts>
    <StyledLink to="/soporte">Instructivos y manuales</StyledLink>
    <StyledLink to="/productos">Nuestros productos</StyledLink>
    <StyledLink to="/horarios">Horarios de atención</StyledLink>
  </StyledShortcuts>
);

export default Shortcuts;
