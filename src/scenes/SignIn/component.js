import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darken } from 'polished';
import Input from '../../components/Input';

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

const ForgotPasswordLink = styled(Link)`
  align-self: flex-end;
  margin-top: 1rem;
  font-size: 0.8rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: ${({ theme }) => darken(0.3, theme.grayLighter)};
  font-size: 0.8rem;
`;

const StyledInput = Input.extend`
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

const SignUp = styled.p`
  padding-top: 1rem;
  margin-top: 1.3rem;
  border-top: 1px solid ${({ theme }) => theme.whiteGray};
  font-size: 0.8rem;
`;

const SignIn = () => (
  <StyledWrapper>
    <Title>Ingresá a tu cuenta</Title>
    <InputBlock>
      <Label htmlFor="email">E-mail:</Label>
      <Input id="email" type="email" />
    </InputBlock>
    <InputBlock>
      <Label htmlFor="password">Contraseña:</Label>
      <Input id="password" type="password" />
      <ForgotPasswordLink to="/registrarse">Olvidé mi contraseña</ForgotPasswordLink>
    </InputBlock>
    <StyledInput type="submit" value="Ingresar" />
    <SignUp>No tengo cuenta, <Link to="/registrarse">conseguir una</Link>.</SignUp>
  </StyledWrapper>
);

export default SignIn;
