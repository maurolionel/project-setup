import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.ul`
  display: flex;
`;

const Nav = () => (
  <nav>
    <StyledNav>
      <li><NavLink to="/productos">Productos</NavLink></li>
      <li><NavLink to="/ofertas">Ofertas</NavLink></li>
      <li><NavLink to="/soporte">Soporte</NavLink></li>
      <li><NavLink to="/contacto">Contacto</NavLink></li>
    </StyledNav>
  </nav>
);

export default Nav;
