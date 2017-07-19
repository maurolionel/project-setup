import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lighten } from 'polished';
import Paper from '../Paper';

const StyledCard = Paper.extend`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;

const LinkImage = styled(Link)`
  flex-basis: 180px;
  background-color: #ededed;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const LinkName = styled(Link)`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.gray};
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  margin: 0 0 1rem;
  color: ${({ theme }) => lighten(0.1, theme.gray)};
`;

const Price = styled.span`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const LinkActionButton = styled(Link)`
  padding: 0.5rem;
  color: ${({ theme }) => theme.base};
  background-color: ${({ theme }) => theme.accent};
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
`;

const Card = () => (
  <StyledCard>
    <LinkImage to="/productos/1">
      <img src="" alt="Imagen del producto" />
    </LinkImage>
    <Details>
      <Price>$599.99</Price>
      <LinkName to="/productos/2">Nombre del producto</LinkName>
      <Description>Breve descripción del producto...</Description>
    </Details>
    <LinkActionButton to="/carrito">Agregar al carrito</LinkActionButton>
  </StyledCard>
);

export default Card;
