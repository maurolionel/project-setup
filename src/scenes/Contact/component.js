import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Information from './components/Information';
import InfoTitle from './components/InfoTitle';
import Alert from '../../components/Alert';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';

const Wrapper = styled.div`
  display: flex;
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

class Contact extends PureComponent {
  state = {
    isValidEmail: true
  };

  handleInputChange = ({ target }) => {
    this.props.onInputValueChange({
      name: target.name,
      value: target.value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.isFormReadyToSubmit()) this.props.onSubmitForm();
  };

  isFormReadyToSubmit = () => {
    const { email, message, name, surname, isLoading } = this.props;
    return email && this.state.isValidEmail && message && name && surname && !isLoading;
  }

  isValidEmail = () => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    this.setState({ isValidEmail: reg.test(this.props.email) });
  }

  shouldShowAlert = () => {
    if (this.props.isError) return 'alert-danger';
    if (this.props.isSuccess) return 'alert-success';
    return false;
  };

  render() {
    const { alertMessage, email, message, name, surname, reason, isLoading } = this.props;
    const alertClassName = this.shouldShowAlert();
    return (
      <div>
        <Wrapper>
          <Form onSubmit={this.handleFormSubmit}>
            <InfoTitle>Envianos tu consulta</InfoTitle>
            <InputColumn>
              <InputRow>
                <Label htmlFor="name">Nombre *</Label>
                <Input value={name} name="name" id="name" type="text" onChange={this.handleInputChange} />
              </InputRow>
              <InputRow>
                <Label htmlFor="surname">Apellido *</Label>
                <Input value={surname} name="surname" id="surname" type="text" onChange={this.handleInputChange} />
              </InputRow>
            </InputColumn>
            <InputRow>
              <Label htmlFor="email">E-mail *</Label>
              <Input value={email} name="email" id="email" type="email" onChange={this.handleInputChange} onBlur={this.isValidEmail} />
              {!this.state.isValidEmail && 'E-mail inválido'}
            </InputRow>
            <InputRow>
              <Label htmlFor="reason">Seleccioná el motivo de tu consulta *</Label>
              <Select value={reason} name="reason" id="reason" onChange={this.handleInputChange}>
                <option value="0">Ventas</option>
                <option value="1">Soporte técnico</option>
              </Select>
            </InputRow>
            <InputRow>
              <Label htmlFor="message">Mensaje *</Label>
              <Textarea value={message} name="message" id="message" onChange={this.handleInputChange} />
            </InputRow>
            <InputRow>
              <Input
                type="submit"
                value={isLoading ? 'Enviando' : 'Enviar consulta'}
                primary
                disabled={isLoading || !this.state.isValidEmail || !this.isFormReadyToSubmit()}
              />
            </InputRow>
            {alertClassName &&
              <InputRow>
                <Alert className={alertClassName}>{alertMessage}</Alert>
              </InputRow>
            }
          </Form>
          <Map>
            <InfoTitle>¿Cómo llegar?</InfoTitle>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.205635894197!2d-58.412594885251885!3d-34.598961280460585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8ec36e1f7b%3A0xd9de65f9f55b0c9f!2sSistemas+Imprek!5e0!3m2!1ses-419!2sar!4v1501033810010"
              width="600"
              height="450"
              frameBorder="0"
              style={{ width: '100%', border: 0 }}
              title="Mapa"
              allowFullScreen
            />
          </Map>
        </Wrapper>
        <Information />
      </div>
    );
  }
}

Contact.propTypes = {
  alertMessage: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reason: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  onInputValueChange: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired
};

export default Contact;
