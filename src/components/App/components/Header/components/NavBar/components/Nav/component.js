import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <li><NavLink to="/productos">Productos</NavLink></li>
      <li><NavLink to="/ofertas">Ofertas</NavLink></li>
      <li><NavLink to="/soporte">Soporte</NavLink></li>
      <li><NavLink to="/contacto">Contacto</NavLink></li>
    </ul>
  </nav>
);

export default Nav;
