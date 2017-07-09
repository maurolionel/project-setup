import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledShortcuts = styled.article`
  display: flex;
`;

const StyledLink = styled(Link)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  color: ${({ theme }) => theme.base};
  background-color: ${({ theme }) => theme.primary};
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
`;

const Shortcuts = () => (
  <StyledShortcuts>
    <StyledLink to="/soporte">Instructivos y manuales</StyledLink>
    <StyledLink to="/productos">Nuestros productos</StyledLink>
    <StyledLink to="/horarios">Horarios de atención</StyledLink>
  </StyledShortcuts>
);

export default Shortcuts;
