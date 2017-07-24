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
  flex-direction: column;
  justify-content: space-around;
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

const Icon = styled.i`
  font-size: 8rem;
`;

const Shortcuts = () => (
  <StyledShortcuts>
    <StyledLink to="/soporte">
      <Icon className="fa fa-cogs" />
      Instructivos y manuales
    </StyledLink>
    <StyledLink to="/productos">
      <Icon className="fa fa-shopping-bag" />
      Nuestros productos
    </StyledLink>
    <StyledLink to="/horarios">
      <Icon className="fa fa-clock-o" />
      Horarios de atención
    </StyledLink>
  </StyledShortcuts>
);

export default Shortcuts;
