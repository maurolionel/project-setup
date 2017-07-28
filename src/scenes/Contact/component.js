import React from 'react';
import styled from 'styled-components';
import Information from './components/Information';
import InfoTitle from './components/InfoTitle';
import Label from '../../components/Label';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';

const Wrapper = styled.div`
  display: flex;
  padding: 0 1.3rem;
`;

const Form = styled.form`
  flex: 1;
  margin-right: 2rem;
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

const Map = styled.div`
  flex: 1;
`;

const Contact = () => (
  <div>
    <Information />
    <Wrapper>

      <Form>
        <InfoTitle>Envianos tu consulta</InfoTitle>
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
          <Label htmlFor="reason">Seleccioná el motivo de tu consulta:</Label>
          <Select id="reason">
            <option value="0">Ventas</option>
            <option value="1">Soporte técnico</option>
          </Select>
        </InputRow>
        <InputRow>
          <Label htmlFor="message">Mensaje:</Label>
          <Textarea id="message" />
        </InputRow>
        <InputRow>
          <Input type="submit" value="Enviar consulta" primary />
        </InputRow>
      </Form>

      <Map>
        <InfoTitle>¿Cómo llegar?</InfoTitle>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.205635894197!2d-58.412594885251885!3d-34.598961280460585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8ec36e1f7b%3A0xd9de65f9f55b0c9f!2sSistemas+Imprek!5e0!3m2!1ses-419!2sar!4v1501033810010"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          title="Mapa"
          allowFullScreen
        />
      </Map>
    </Wrapper>
  </div>
);

export default Contact;
