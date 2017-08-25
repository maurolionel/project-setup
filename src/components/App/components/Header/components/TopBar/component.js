import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TopBarNavLink from './components/TopBarNavLink';
import ShoppingCartBadge from '../ShoppingCartBadge';
import Icon from '../../../../../../components/Icon';

const StyledTopBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.desktop}px;
  margin: 0 auto;
  font-size: 0.9rem;
`;

const TopBarSection = styled.div`
  display: flex;
`;

const TopBarLink = TopBarNavLink.withComponent(Link);

const TopBar = () => (
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
        Carrito
        <Icon className="fa fa-shopping-cart" placement="right" />
        <ShoppingCartBadge />
      </TopBarNavLink>
    </TopBarSection>
  </StyledTopBar>
);

export default TopBar;
