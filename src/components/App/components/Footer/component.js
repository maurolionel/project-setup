import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.base};
`;

const Information = styled.footer`
  display: flex;
  background-color: ${({ theme }) => theme.grayDarker};
  section {
    flex: 1;
  }
`;

const Title = styled.p`
  text-transform: uppercase;
`;

const Copyrights = styled.div`
  background-color: ${({ theme }) => darken(0.03, theme.grayDarker)};
  text-align: center;
  p {
    padding: 0.7rem 0;
    margin: 0;
  }
`;

const Footer = () => (
  <StyledFooter>
    <Information>
      <section>
        <Title>Destacados</Title>
        <ul>
          <li>Producto 1</li>
          <li>Producto 2</li>
          <li>Producto 3</li>
          <li>Producto 4</li>
        </ul>
      </section>
      <section>
        <Title>Categorías</Title>
        <ul>
          <li>Impresoras</li>
          <li>Sistemas continuos</li>
          <li>Tinta</li>
          <li>Papel</li>
          <li>Cartuchos recargables</li>
          <li>Tóner</li>
        </ul>
      </section>
      <section>
        <Title>Mi cuenta</Title>
        <ul>
          <li>Mis compras</li>
          <li>Mis datos</li>
        </ul>
      </section>
      <section>
        <Title>Información</Title>
        <ul>
          <li>Ubicación</li>
          <li>Teléfono</li>
          <li>E-mail</li>
        </ul>
      </section>
    </Information>
    <Copyrights>
      <p>Sistemas Imprek &#174; es  marca registrada. Copyright 2007 - {(new Date()).getFullYear()}.</p>
    </Copyrights>
  </StyledFooter>
);

export default Footer;
