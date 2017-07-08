import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  margin-right: 2rem;
`;

const Logo = () => (
  <StyledNavLink to="/">
    <img src="" alt="Logo Imprek" />
  </StyledNavLink>
);

export default Logo;
