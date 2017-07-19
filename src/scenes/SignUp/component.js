import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darken } from 'polished';
import Input from '../../components/Input';
import Anchor from '../../components/Anchor';

const StyledWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  margin: 1.5rem 0 5rem;
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.gray};
  font-size: 1.3rem;
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem; 
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: ${({ theme }) => darken(0.3, theme.grayLighter)};
  font-size: 0.8rem;
`;

const StyledInput = styled(Input)`
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

const SignIn = styled.p`
  padding-top: 1rem;
  margin-top: 1.3rem;
  border-top: 1px solid ${({ theme }) => theme.whiteGray};
  font-size: 0.8rem;
`;

const SignUp = () => (
  <StyledWrapper>
    <Title>Registrá tu cuenta</Title>
    <InputBlock>
      <Label htmlFor="name">Nombre:</Label>
      <Input id="name" type="text" />
    </InputBlock>
    <InputBlock>
      <Label htmlFor="surname">Apellido:</Label>
      <Input id="surname" type="text" />
    </InputBlock>
    <InputBlock>
      <Label htmlFor="email">E-mail:</Label>
      <Input id="email" type="text" />
    </InputBlock>
    <InputBlock>
      <Label htmlFor="password">Contraseña:</Label>
      <Input id="password" type="password" />
    </InputBlock>
    <InputBlock>
      <Label htmlFor="password-repeat">Repetir contraseña:</Label>
      <Input id="password-repeat" type="password" />
    </InputBlock>
    <StyledInput type="submit" value="Registrar cuenta" primary />
    <SignIn>Ya tengo una cuenta, <Anchor to="/ingresar">ingresar</Anchor>.</SignIn>
  </StyledWrapper>
);

export default SignUp;
