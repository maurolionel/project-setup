import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Nav from './components/Nav';
import NavLink from './components/NavLink';
import Logo from '../../../../../../components/Logo';
import Input from '../../../../../../components/Input';
import ShoppingCartBadge from '../ShoppingCartBadge';
import Icon from '../../../../../../components/Icon';

const StyledNavBar = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  max-width: ${({ theme }) => theme.desktop}px;
  height: 60px;
  padding: 0 0.5rem;
  margin: 0 auto;
`;

const SearchBarWrapper = styled.div`
  margin-left: auto;
  margin-right: 0.5rem;
  transition: 0.25s transform ease;
  &.is-fixed {
    transform: translateX(-117px);
  }
`;

const AdditionalLinks = styled(Nav)`
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0.5rem;
  bottom: 0;
  transform: translateX(100%);
  transition: 0.25s opacity ease, 0.25s transform ease;
  &.is-fixed {
    opacity: 1;
    transform: translateX(0);
  }
`;

const FixedNav = ({ className }) => (
  <AdditionalLinks className={className}>
    <NavLink to="/ingresar" title="Ingresá a tu cuenta o creá una nueva">
      <Icon className="fa fa-sign-in" bigSize />
    </NavLink>
    <NavLink to="/carrito" title="Tu carrito de compras">
      <Icon className="fa fa-shopping-cart" bigSize />
      <ShoppingCartBadge className="is-fixed" />
    </NavLink>
  </AdditionalLinks>
);

FixedNav.propTypes = {
  className: PropTypes.string.isRequired
};

const NavBar = ({ isFixed }) => (
  <StyledNavBar>
    <Logo />
    <Nav>
      <NavLink to="/productos">Productos</NavLink>
      <NavLink to="/ofertas">Ofertas</NavLink>
      <NavLink to="/soporte">Soporte</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
    </Nav>
    <SearchBarWrapper className={isFixed ? 'is-fixed' : ''}>
      <Input type="search" placeholder="Buscar..." />
    </SearchBarWrapper>
    <FixedNav className={isFixed ? 'is-fixed' : ''} />
  </StyledNavBar>
);

NavBar.propTypes = {
  isFixed: PropTypes.bool.isRequired
};

export default NavBar;
