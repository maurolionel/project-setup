import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import Input from '../../components/Input';
import Anchor from '../../components/Anchor';
import Title from '../../components/Title';
import Label from '../../components/Label';

const StyledWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  min-width: 350px;
  color: ${({ theme }) => theme.gray};
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem; 
`;

const ForgotPasswordLink = styled(Anchor)`
  align-self: flex-end;
  margin-top: 0.7rem;
  font-size: 0.85rem;
`;

const StyledInput = styled(Input)`
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

const SignUp = styled.p`
  padding-top: 1rem;
  margin-top: 1.3rem;
  border-top: 1px solid ${({ theme }) => darken(0.05, theme.whiteGray)};
  font-size: 0.85rem;
`;

const SignIn = () => (
  <StyledWrapper>
    <Title>Ingresá a tu cuenta</Title>
    <InputBlock>
      <Label htmlFor="email">E-mail:</Label>
      <Input id="email" type="email" autoFocus />
    </InputBlock>
    <InputBlock>
      <Label htmlFor="password">Contraseña:</Label>
      <Input id="password" type="password" />
      <ForgotPasswordLink to="/registrarse">Olvidé mi contraseña</ForgotPasswordLink>
    </InputBlock>
    <StyledInput type="submit" value="Ingresar" primary />
    <SignUp>No estoy registrado, <Anchor to="/registrarse">crear una cuenta</Anchor>.</SignUp>
  </StyledWrapper>
);

export default SignIn;
