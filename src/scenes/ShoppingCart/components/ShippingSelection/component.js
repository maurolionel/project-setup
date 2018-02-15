import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { WITHOUT_SELECTION, WITHDRAW_OPTION, SHIPPING_OPTION } from '../../../../services/shippings/constants';
import Title from '../../../../components/Title';
import Label from '../../../../components/Label';
import Input from '../../../../components/Input';
import Select from '../../../../components/Select';
import Button from '../../../../components/Button';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  > * {
    flex: 1;
  }
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

class ShippingSelection extends PureComponent {
  handleChange = ({ target: { name, value } }) => {
    this.props.onInputChange(name, value);
    if (name === 'province') {
      this.props.onInputChange('location', '0');
      if (this.props.data.shippingOption === '4') {
        this.props.getLocationsForProvince(value);
        this.props.getCorreoBranchOffices(value);
      }
    }
    if (name === 'shippingOption') {
      this.props.onInputChange('location', '0');
      this.props.onInputChange('province', '0');
      this.props.onInputChange('correoBranchOffices', '0');
      if (value === '1') {
        this.props.getProvincesForMoto();
      } else {
        this.props.getAllProvinces();
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onNextStep();
  }

  isSubmitDisabled = () => {
    const { data } = this.props;
    const { calle, altura, zipCode } = data;
    const shippingForm = parseInt(data.shippingForm, 10);
    const province = parseInt(data.province, 10);
    const location = parseInt(data.location, 10);
    const shippingMethod = parseInt(data.shippingMethod, 10);
    if (shippingForm === WITHOUT_SELECTION) return true;
    if (shippingForm === WITHDRAW_OPTION) return false;
    if (province && location && calle && altura && shippingMethod && zipCode) return false;
    return true;
  }

  renderProvinces = (provinces) => {
    if (!provinces.length) return null;
    return provinces.map(this.renderOption);
  }

  renderLocations = (locations) => {
    if (!locations.length) return null;
    return locations.map(this.renderOption);
  }

  renderShippingForms = () => {
    const { shippingForms } = this.props;
    if (!shippingForms.length) return null;
    return shippingForms.map(this.renderShippingFormRadioInput);
  }

  renderShippingOptions = () => {
    const { shippingOptions } = this.props;
    if (!shippingOptions.length) return null;
    return shippingOptions.map(this.renderShippingOptionRadioInput);
  }

  renderShippingMethods = () => {
    const { shippingMethods } = this.props;
    if (!shippingMethods.length) return null;
    return shippingMethods.map(this.renderOption);
  }

  renderOption = option => (
    <option key={`${option.id}-${option.name}`} value={option.id}>{option.name}</option>
  );

  renderShippingFormRadioInput = shippingForm => (
    <label key={`${shippingForm.id}-${shippingForm.title}`} htmlFor={shippingForm.title}>
      <input type="radio" value={shippingForm.id} name="shippingForm" id={shippingForm.title} checked={shippingForm.id == this.props.data.shippingForm} onChange={this.handleChange} />
      {shippingForm.name}
    </label>
  );

  renderShippingOptionRadioInput = shippingOption => (
    <label key={`${shippingOption.id}-${shippingOption.title}`} htmlFor={shippingOption.title}>
      <input type="radio" value={shippingOption.id} name="shippingOption" id={shippingOption.title} checked={shippingOption.id == this.props.data.shippingOption} onChange={this.handleChange} />
      {`${shippingOption.title} (${shippingOption.delay})`}
    </label>
  );

  renderWithdrawOptionContent = () => (
    <FormGroup>
      <FlexRow>
        <FormGroup>
          <Title>Dirección de retiro</Title>
          <p>Agüero 927 / 931, entre San Luis y Av. Córdoba, Ciudad Autónoma de Buenos Aires, Argentina.</p>
          <Title>Horarios de atención</Title>
          <p>
            <span style={{ fontWeight: '700' }}>Lunes a viernes</span><br />
            Ventas en general: 10 a 18 hs.<br />
            Ventas de impresoras: 10 a 17 hs.<br />
            Armado de sistemas continuos de 2 cartuchos: 10 a 17 hs.
          </p>
          <p>
            <span style={{ fontWeight: '700' }}>Sábados</span><br />
            Ventas en general: 9 a 13 hs.<br />
            Ventas de impresoras: 9 a 11 hs.
          </p>
        </FormGroup>
        <FormGroup>
          <Title>¿Cómo llegar?</Title>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.205635894197!2d-58.412594885251885!3d-34.598961280460585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8ec36e1f7b%3A0xd9de65f9f55b0c9f!2sSistemas+Imprek!5e0!3m2!1ses-419!2sar!4v1501033810010"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            title="Mapa"
            allowFullScreen
          />
        </FormGroup>
      </FlexRow>
    </FormGroup>
  );

  selectShippingOptionContent = () => {
    const shippingForm = parseInt(this.props.data.shippingForm, 10);
    const shippingOption = parseInt(this.props.data.shippingOption, 10);
    if (shippingForm === SHIPPING_OPTION) {
      if (shippingOption === 1) return this.renderMotoDataRequirements();
      if (shippingOption === 2 || shippingOption === 3) return this.renderDataRequirements();
      if (shippingOption === 4) return this.renderCorreoDataRequirements();
    }
    return null;
  };

  renderMotoDataRequirements = () => this.renderDataRequirements()

  renderCorreoDataRequirements = () => (
    <FormGroup>
      <Title>Dirección de destino</Title>
      <InputGroup>
        {this.renderLocationAndProvinceRequirements()}
        <div>
          <Label>Sucursal de Correo Argentino *</Label>
          <Select name="correoBranchOffice" value={this.props.data.correoBranchOffice} onChange={this.handleChange} required>
            <option value="0">Seleccionar sucursal</option>
            {this.props.correoBranchOffices && this.props.correoBranchOffices.map(this.renderOption)}
          </Select>
        </div>
      </InputGroup>
    </FormGroup>
  );

  renderDataRequirements = () => (
    <FormGroup>
      <Title>Dirección de destino</Title>
      {this.renderLocationAndProvinceRequirements()}
      {this.renderPersonalDataRequirements()}
    </FormGroup>
  );

  renderLocationAndProvinceRequirements = () => {
    const { location, province } = this.props.data;
    return (
      <div>
        <InputGroup>
          <div>
            <Label>Provincia *</Label>
            <Select name="province" value={province} onChange={this.handleChange} required>
              <option value="0">Seleccionar provincia</option>
              {!this.props.isLoadingProvinces && this.renderProvinces(this.props.provinces)}
            </Select>
          </div>
          <div>
            <Label>Localidad *</Label>
            <Select name="location" value={location} onChange={this.handleChange} required>
              <option value="0">Seleccionar localidad</option>
              {!this.props.isLoadingLocations && this.renderLocations(this.props.locations)}
            </Select>
          </div>
        </InputGroup>
      </div>
    );
  };

  renderPersonalDataRequirements = () => {
    const { calle, altura, piso, departamento, zipCode } = this.props.data;
    return (
      <div>
        <InputGroup>
          <div>
            <Label>Calle *</Label>
            <Input name="calle" type="text" value={calle} onChange={this.handleChange} required />
          </div>
          <div>
            <Label>Altura *</Label>
            <Input name="altura" type="text" value={altura} onChange={this.handleChange} required />
          </div>
        </InputGroup>
        <InputGroup>
          <div>
            <Label>Piso</Label>
            <Input name="piso" type="text" value={piso} onChange={this.handleChange} />
          </div>
          <div>
            <Label>Departamento</Label>
            <Input name="departamento" type="text" value={departamento} onChange={this.handleChange} />
          </div>
          <div>
            <Label>Código postal *</Label>
            <Input name="zipCode" type="text" value={zipCode} onChange={this.handleChange} required />
          </div>
        </InputGroup>
      </div>
    );
  };

  render() {
    const { shippingForm } = this.props.data;
    const shippingFormNumber = parseInt(shippingForm, 10);
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Title>Forma de entrega</Title>
          <Label>Seleccioná la forma de entrega</Label>
          {this.renderShippingForms()}
        </FormGroup>
        {shippingFormNumber === WITHDRAW_OPTION && this.renderWithdrawOptionContent()}
        {shippingFormNumber === SHIPPING_OPTION && this.renderShippingOptions()}
        {this.selectShippingOptionContent()}
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

ShippingSelection.propTypes = {
  correoBranchOffices: PropTypes.array.isRequired,
  provinces: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  isLoadingProvinces: PropTypes.bool.isRequired,
  isLoadingLocations: PropTypes.bool.isRequired,
  shippingForms: PropTypes.array.isRequired,
  shippingMethods: PropTypes.array.isRequired,
  shippingOptions: PropTypes.array.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onPrevStep: PropTypes.func.isRequired,
  onNextStep: PropTypes.func.isRequired,
  getAllProvinces: PropTypes.func.isRequired,
  getLocationsForProvince: PropTypes.func.isRequired,
  getProvincesForMoto: PropTypes.func.isRequired,
  getCorreoBranchOffices: PropTypes.func.isRequired
};

export default ShippingSelection;
