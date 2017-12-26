import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../../../../components/Title';
import Label from '../../../../components/Label';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  padding: 0.5rem;
  margin-top: 0.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
  div {
    flex: 1;
    margin: 0 0.5rem;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
`;

class UserInformation extends PureComponent {
  handleChange = ({ target: { name, value } }) => {
    this.props.onInputChange(name, value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onNextStep();
  }

  isSubmitDisabled = () => {
    const { name, surname, dni, email, tel } = this.props.data;
    if (name && surname && dni && email && tel) return false;
    return true;
  }

  renderMandatoryFields = () => (
    <InputGroup>
      <div>
        <Label>Nombre *</Label>
        <Input name="name" type="text" value={this.props.data.name} onChange={this.handleChange} required />
      </div>
      <div>
        <Label>Apellido *</Label>
        <Input name="surname" type="text" value={this.props.data.surname} onChange={this.handleChange} required />
      </div>
      <div>
        <Label>D.N.I. *</Label>
        <Input name="dni" type="text" value={this.props.data.dni} onChange={this.handleChange} required />
      </div>
      <div>
        <Label>E-mail *</Label>
        <Input name="email" type="text" value={this.props.data.email} onChange={this.handleChange} required />
      </div>
      <div>
        <Label>Teléfono *</Label>
        <Input name="tel" type="text" value={this.props.data.tel} onChange={this.handleChange} required />
      </div>
    </InputGroup>
  );

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Title>Datos de contacto</Title>
          {this.renderMandatoryFields()}
        </FormGroup>
        <ActionGroup>
          <Button type="button" onClick={this.props.onPrevStep}>Ver paso anterior</Button>
          <Button
            type={this.isSubmitDisabled() ? 'button' : 'submit'}
            primary
            disabled={this.isSubmitDisabled()}
            withoutChangingStateStyle={this.isSubmitDisabled()}
          >Siguiente</Button>
        </ActionGroup>
      </Form>
    );
  }
}

UserInformation.propTypes = {
  data: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onPrevStep: PropTypes.func.isRequired,
  onNextStep: PropTypes.func.isRequired
};

export default UserInformation;
