import React from 'react';
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

const TopBar = () => (
  <StyledTopBar>
    <TopBarSection>
      <TopBarNavLink to="/horarios" title="Nuestros horarios de atención">
        <Icon className="fa fa-clock-o" />
        Horarios
      </TopBarNavLink>
      <TopBarNavLink to="/envios" title="Conocé nuestros métodos de envío">
        <Icon className="fa fa-truck" />
        Métodos de envío
      </TopBarNavLink>
      <TopBarLink to="/contacto" title="Llamanos, ¡tu consulta no molesta!">
        <Icon className="fa fa-phone" />
        Teléfono: (011) 3220.0500
      </TopBarLink>
    </TopBarSection>
    <TopBarSection>
      <TopBarNavLink to="/ingresar" title="Ingresá a tu cuenta">
        Ingresar
        <Icon className="fa fa-sign-in" placement="right" />
      </TopBarNavLink>
      <TopBarNavLink to="/carrito" title="Tu carrito de compras">
        <Icon className="fa fa-shopping-cart" />
      </TopBarNavLink>
    </TopBarSection>
  </StyledTopBar>
);

export default TopBar;
