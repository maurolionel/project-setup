import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import Input from '../../components/Input';
import Anchor from '../../components/Anchor';
import Title from '../../components/Title';
import Label from '../../components/Label';

const Wrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  min-width: 350px;
  color: ${({ theme }) => theme.gray};
`;

const InputRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const InputColumn = styled.div`
  display: flex;
  flex-direction: row;
  > *:first-child {
    margin-right: 1rem;
  }
`;

const StyledInput = styled(Input)`
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

const SignIn = styled.p`
  padding-top: 1rem;
  margin-top: 1.3rem;
  border-top: 1px solid ${({ theme }) => darken(0.05, theme.whiteGray)};
  font-size: 0.85rem;
`;

const SignUp = () => (
  <Wrapper>
    <Title>Registrá tu cuenta</Title>
    <InputColumn>
      <InputRow>
        <Label htmlFor="name">Nombre:</Label>
        <Input id="name" type="text" autoFocus />
      </InputRow>
      <InputRow>
        <Label htmlFor="surname">Apellido:</Label>
        <Input id="surname" type="text" />
      </InputRow>
    </InputColumn>
    <InputRow>
      <Label htmlFor="email">E-mail:</Label>
      <Input id="email" type="text" />
    </InputRow>
    <InputRow>
      <Label htmlFor="password">Contraseña:</Label>
      <Input id="password" type="password" />
    </InputRow>
    <InputRow>
      <Label htmlFor="password-repeat">Repetir contraseña:</Label>
      <Input id="password-repeat" type="password" />
    </InputRow>
    <StyledInput type="submit" value="Registrar cuenta" primary />
    <SignIn>Ya estoy registrado, <Anchor to="/ingresar">ingresar a mi cuenta</Anchor>.</SignIn>
  </Wrapper>
);

export default SignUp;
