import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TopBarNavLink from './components/TopBarNavLink';
import Icon from '../../../../../../components/Icon';

const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.primary};
  font-size: 0.9rem;
`;

const TopBarSection = styled.div`
  display: flex;
`;

const TopBarLink = TopBarNavLink.withComponent(Link);

const TopBar = ({ productsInCartQuantity }) => (
  <StyledTopBar>
    <TopBarSection>
      <TopBarLink to="/contacto" title="Conocé nuestros horarios de atención">
        <Icon className="fa fa-clock-o" />
        Horarios
      </TopBarLink>
      <TopBarLink to="/contacto" title="Conocé nuestros métodos de envío">
        <Icon className="fa fa-truck" />
        Métodos de envío
      </TopBarLink>
      <TopBarLink to="/contacto" title="Llamanos, ¡tu consulta no molesta!">
        <Icon className="fa fa-phone" />
        Teléfono: (011) 3220.0500
      </TopBarLink>
    </TopBarSection>
    <TopBarSection>
      <TopBarNavLink to="/ingresar" title="Ingresá a tu cuenta o creá una nueva">
        Ingresar
        <Icon className="fa fa-sign-in" placement="right" />
      </TopBarNavLink>
      <TopBarNavLink to="/carrito" title="Tu carrito de compras">
        <Icon className="fa fa-shopping-cart" />
        {productsInCartQuantity > 0 ? `(${productsInCartQuantity})` : null}
      </TopBarNavLink>
    </TopBarSection>
  </StyledTopBar>
);

TopBar.propTypes = {
  productsInCartQuantity: PropTypes.number.isRequired
};

export default TopBar;
