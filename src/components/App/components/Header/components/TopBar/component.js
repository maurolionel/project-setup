import React from 'react';
import styled from 'styled-components';
import TopBarLink from './components/TopBarLink';

const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.primary};
  font-size: 0.9rem;
`;

const TopBarSection = styled.div`
  display: flex;
`;

const TopBar = () => (
  <StyledTopBar>
    <TopBarSection>
      <TopBarLink to="/horarios">Horarios</TopBarLink>
      <TopBarLink to="/envios">Métodos de envío</TopBarLink>
      <TopBarLink to="/contacto">Teléfono: (011) 3220.0500</TopBarLink>
    </TopBarSection>
    <TopBarSection>
      <TopBarLink to="/ingresar">Ingresar</TopBarLink>
      <TopBarLink to="/carrito">Carrito</TopBarLink>
    </TopBarSection>
  </StyledTopBar>
);

export default TopBar;
