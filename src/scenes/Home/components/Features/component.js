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
  text-align: justify;
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

const Description = styled.p`
  font-size: 0.9rem;
`;

const Features = () => (
  <StyledFeatures>
    <Feature>
      <Heading>
        <Icon className="feature--shipping fa fa-truck" />
        <Title>Envíos y entregas</Title>
      </Heading>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Description>
    </Feature>
    <Feature>
      <Heading>
        <Icon className="feature--payment fa fa-money" />
        <Title>Medios de pago</Title>
      </Heading>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Description>
    </Feature>
    <Feature>
      <Heading>
        <Icon className="feature--service fa fa-comments-o" />
        <Title>Atención especializada</Title>
      </Heading>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Description>
    </Feature>
  </StyledFeatures>
);

export default Features;
