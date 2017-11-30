import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Nav from './components/Nav';
import NavLink from './components/NavLink';
import Logo from '../../../../../../components/Logo';
import Explorer from '../../../../../../components/Explorer';
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
  opacity: 1;
  margin-left: auto;
  margin-right: 0.5rem;
  transition: 0.25s transform ease, 0.25s opacity ease;
  &.is-fixed {
    opacity: 0;
    transform: translateX(300px);
  }
`;

const AdditionalLinks = styled(Nav)`
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  transform: translateX(100%);
  transition: 0.3s opacity ease, 0.3s transform ease;
  &.is-fixed {
    opacity: 1;
    transform: translateX(0);
  }
`;

const FixedNav = ({ className, totalProducts }) => (
  <AdditionalLinks className={className}>
    <NavLink to="/ingresar" title="Buscá un producto">
      <Icon style={{ margin: 0 }} className="fa fa-search" bigSize />
    </NavLink>
    <NavLink to="/carrito" title="Tu carrito de compras">
      {totalProducts
        ? <ShoppingCartBadge className="is-fixed" quantity={totalProducts} />
        : <Icon style={{ margin: 0 }} className="fa fa-shopping-cart" bigSize />
      }
    </NavLink>
  </AdditionalLinks>
);

FixedNav.propTypes = {
  className: PropTypes.string.isRequired,
  totalProducts: PropTypes.number.isRequired
};

const NavBar = ({ totalProducts, isFixed }) => (
  <StyledNavBar>
    <Logo />
    <Nav>
      <NavLink to="/productos">Productos</NavLink>
      <NavLink to="/ofertas">Ofertas</NavLink>
      <NavLink to="/soporte">Soporte</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
    </Nav>
    <SearchBarWrapper className={isFixed ? 'is-fixed' : ''}>
      <Explorer />
    </SearchBarWrapper>
    <FixedNav className={isFixed ? 'is-fixed' : ''} totalProducts={totalProducts} />
  </StyledNavBar>
);

NavBar.propTypes = {
  totalProducts: PropTypes.number.isRequired,
  isFixed: PropTypes.bool.isRequired
};

export default NavBar;
