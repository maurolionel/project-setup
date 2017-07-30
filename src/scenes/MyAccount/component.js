import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';

const Profile = styled.div``;

const Shortcuts = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const ShortcutButton = styled(Button)`
  flex: 0 1 30%;
  display: flex;
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.base};
  &:hover > .fa {
    transform: scale(1);
  }
`;

const Icon = styled.i.attrs({
  className: props => `fa fa-${props.type}`
})`
  margin-right: 0.8rem;
  color: ${({ theme }) => theme.primary};
  font-size: 5rem;
  transform: scale(0.9);
  transition: 0.1s transform linear; 
`;

const Title = styled.h3`
  margin: 0.2rem 0 0.5rem;
  color: ${({ theme }) => theme.gray};
  font-size: 1.3rem;
  font-weight: 400;
`;

const Description = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const MyAccount = () =>
  <div>
    <Profile>
      <div>picture</div>
      <div>purchases</div>
      <div>last purchase</div>
    </Profile>
    <Shortcuts>
      <ShortcutButton to="#">
        <Icon type="shopping-cart" />
        <div>
          <Title>Mis compras</Title>
          <Description>Accede para ver información de tus compras</Description>
        </div>
      </ShortcutButton>
      <ShortcutButton to="#">
        <Icon type="lock" />
        <div>
          <Title>Mis datos</Title>
          <Description>Accede para editar tus datos personales</Description>
        </div>
      </ShortcutButton>
      <ShortcutButton to="#">
        <Icon type="map-marker" />
        <div>
          <Title>Mis direcciones</Title>
          <Description>Accede para editar tus direcciones</Description>
        </div>
      </ShortcutButton>
      <ShortcutButton to="#">
        <Icon type="gift" />
        <div>
          <Title>Mis cupones</Title>
          <Description>Accede para ver tus cupones de descuento</Description>
        </div>
      </ShortcutButton>
    </Shortcuts>
  </div>;

export default MyAccount;
