import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darken } from 'polished';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
`;

const InformationWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => darken(0.06, theme.whiteGray)};
  background-color: ${({ theme }) => darken(0.04, theme.whiteGray)};
`;

const Information = styled.div`
  display: flex;
  width: 100%;
  max-width: ${({ theme }) => theme.desktop}px;
  margin: 0 auto;
  color: #969696;
  font-size: 0.9rem;
  section {
    flex: 1;
    padding: 0 1rem 1rem;
  }
  ul {
    padding: 0;
    list-style: none;
    li {
      margin: 0.3rem 0;
    }
  }
`;

const Title = styled.p`
  font-weight: 700;
`;

const CopyrightsWrapper = styled.div`
  padding: 0.6rem 0 0.5rem;
  background-color: ${({ theme }) => darken(0.09, theme.whiteGray)};
  `;

const Copyrights = styled.p`
  width: 100%;
  max-width: ${({ theme }) => theme.desktop}px;
  margin: 0 auto;
  color: #969696;
  font-size: 0.8rem;
  text-align: center;
`;

const Footer = () => (
  <StyledFooter>
    <InformationWrapper>
      <Information>
        <section>
          <Title>Destacados</Title>
          <ul>
            <li>Nuevos productos</li>
            <li>Ofertas</li>
            <li><Link to="/contacto">Contacto</Link></li>
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
    </InformationWrapper>
    <CopyrightsWrapper>
      <Copyrights>
        Sistemas Imprek &#174; es  marca registrada. Copyright 2007 - {(new Date()).getFullYear()}.
      </Copyrights>
    </CopyrightsWrapper>
  </StyledFooter>
);

export default Footer;
