import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TopBarNavLink from './components/TopBarNavLink';

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
      <TopBarNavLink to="/horarios">Horarios</TopBarNavLink>
      <TopBarNavLink to="/envios">Métodos de envío</TopBarNavLink>
      <TopBarLink to="/contacto">Teléfono: (011) 3220.0500</TopBarLink>
    </TopBarSection>
    <TopBarSection>
      <TopBarNavLink to="/ingresar">Ingresar</TopBarNavLink>
      <TopBarNavLink to="/carrito">Carrito</TopBarNavLink>
    </TopBarSection>
  </StyledTopBar>
);

export default TopBar;
