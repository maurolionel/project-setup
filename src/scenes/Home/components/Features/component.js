import React from 'react';
import styled from 'styled-components';

const StyledFeatures = styled.section`
  display: flex;
  margin: 3rem 0;
`;

const Feature = styled.div`
  flex: 1;
  padding: 0.5rem 1.5rem;
  border-right: 1px solid ${({ theme }) => theme.grayLighter};
  color: ${({ theme }) => theme.gray};
  text-align: left;
  &:last-child {
    border-right: 0;
  }
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Icon = styled.i`
  margin-right: 0.5rem;
  font-size: 2.5rem;
  &.feature--shipping { color: #fbb03b; }
  &.feature--payment { color: #39b54a; }
  &.feature--service { color: #29abe2; }
`;

const Title = styled.h3`
  margin: 0;
  font-weight: 700;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
`;

const Features = () => (
  <StyledFeatures>
    <Feature>
      <Heading>
        <Icon className="feature--shipping fa fa-truck" />
        <Title>Envíos y entregas</Title>
      </Heading>
      <Text>
        Sistemas Imprek cuenta con servicio de envíos a todo el territorio nacional con el mejor tiempo de entrega y con las mejores tarifas del mercado.
      </Text>
    </Feature>
    <Feature>
      <Heading>
        <Icon className="feature--payment fa fa-money" />
        <Title>Medios de pago</Title>
      </Heading>
      <Text>
        Contamos con gran variedad de medios y tipos de pago que le permiten seleccionar el de su preferencia.
      </Text>
      <Text>
        Aceptamos tarjeta de crédito, débito, transferencia Bancaria, Mercado Pago y Efectivo.
      </Text>
    </Feature>
    <Feature>
      <Heading>
        <Icon className="feature--service fa fa-comments-o" />
        <Title>Atención especializada</Title>
      </Heading>
      <Text>
        Con más de 20 años de experiencia en el rubro somos la única empresa que brinda atención especializada en sistemas continuos.
        Nuestro plantel de técnicos en constante capacitación, hace posible brindar el servicio más completo, rápido y eficiente que existe en el mercado.
      </Text>
    </Feature>
  </StyledFeatures>
);

export default Features;
