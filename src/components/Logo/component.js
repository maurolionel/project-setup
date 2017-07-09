import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  margin-right: 2rem;
`;

const Logo = () => (
  <StyledLink to="/">
    <img src="" alt="Logo Imprek" />
  </StyledLink>
);

export default Logo;
