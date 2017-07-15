import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoSource from './images/logo-imprek.svg';

const StyledLink = styled(Link)`
  width: 15rem;
  margin-right: 2rem;
`;

const Logo = () => (
  <StyledLink to="/">
    <img src={logoSource} alt="Logo Imprek" />
  </StyledLink>
);

export default Logo;
