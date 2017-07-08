import React from 'react';
import styled from 'styled-components';

const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.primary};
`;

const TopBarSection = styled.div`
  display: flex;
`;

const TobBarLink = styled.a.attrs({
  href: '#'
})`
  padding: 0.7rem 1rem;
  color: ${props => props.theme.base};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background-color: blue;
  }
  &:active {
    color: orange;
    background-color: blue;
  }
`;

const TopBar = () => (
  <StyledTopBar>
    <TopBarSection>
      <TobBarLink>Horarios</TobBarLink>
      <TobBarLink>Métodos de envío</TobBarLink>
      <TobBarLink>Teléfono: (011) 3220.0500</TobBarLink>
    </TopBarSection>
    <TopBarSection>
      <TobBarLink>Entrar</TobBarLink>
      <TobBarLink>Carrito</TobBarLink>
    </TopBarSection>
  </StyledTopBar>
);

export default TopBar;
