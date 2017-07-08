import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <li><NavLink to="/home">Home</NavLink></li>
      <li><NavLink to="/products">Productos</NavLink></li>
    </ul>
  </nav>
);

export default Nav;
