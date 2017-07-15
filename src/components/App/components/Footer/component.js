import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
`;

const Information = styled.div`
  display: flex;
  color: #969696;
  background-color: ${({ theme }) => theme.whiteGray};
  section {
    flex: 1;
    padding: 0 1rem 1rem;
  }
  ul {
    padding: 0;
    list-style: none;
  }
`;

const Title = styled.p`
  font-weight: 700;
  text-transform: uppercase;
`;

const Copyrights = styled.p`
  padding: 0.6rem 0 0.5rem;
  margin: 0;
  color: #757575;
  background-color: #e0e0e0;
  font-size: 0.8rem;
  text-align: center;
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
      Sistemas Imprek &#174; es  marca registrada. Copyright 2007 - {(new Date()).getFullYear()}.
    </Copyrights>
  </StyledFooter>
);

export default Footer;
