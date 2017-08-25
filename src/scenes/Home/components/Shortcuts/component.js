import React from 'react';
import PropTypes from 'prop-types';
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
  transition: 0.25s background-color ease;

  &:nth-child(1) {
    background-color: ${({ theme }) => lighten(0.03, theme.primary)};
    &:hover {
      background-color: ${({ theme }) => lighten(0.1, theme.primary)};
    }
  }
  &:nth-child(2) {
    background-color: ${({ theme }) => theme.primary};
    &:hover {
      background-color: ${({ theme }) => lighten(0.07, theme.primary)};
    }
  }
  &:nth-child(3) {
    background-color: ${({ theme }) => darken(0.03, theme.primary)};
    &:hover {
      background-color: ${({ theme }) => lighten(0.04, theme.primary)};
    }
  }

  &:hover > i {
    transform: scale(1.15);
  }

`;

const Icon = styled.i`
  font-size: 8rem;
  transition: 0.25s transform ease;
`;

const Shortcuts = ({ onOpenModalSchedules }) => (
  <StyledShortcuts>
    <StyledLink to="/soporte">
      <Icon className="fa fa-cogs" />
      Instructivos y manuales
    </StyledLink>
    <StyledLink to="/productos">
      <Icon className="fa fa-shopping-bag" />
      Nuestros productos
    </StyledLink>
    <StyledLink
      to="#"
      onClick={(event) => {
        event.preventDefault();
        onOpenModalSchedules();
      }}
    >
      <Icon className="fa fa-clock-o" />
      Horarios de atención
    </StyledLink>
  </StyledShortcuts>
);

Shortcuts.propTypes = {
  onOpenModalSchedules: PropTypes.func.isRequired
};

export default Shortcuts;
