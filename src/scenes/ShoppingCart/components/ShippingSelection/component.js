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

const LocalInfo = () => (
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
);

class ShippingSelection extends PureComponent {
  state = {
    activeLocations: []
  }

  componentDidMount() {
    if (!this.props.provinces.length) this.props.onGetProvinces();
  }

  setActiveLocations = (provinceId) => {
    const { locations } = this.props;
    const activeLocations = locations.filter(l => l.provinceId === parseInt(provinceId, 10));
    this.setState({ activeLocations });
  }

  handleChange = ({ target: { name, value } }) => {
    this.props.onInputChange(name, value);
    if (name === 'province') {
      this.props.onInputChange('location', '0');
      this.props.onInputChange('shippingMethod', '0');
      this.props.onGetLocations(value);
    }
    if (name === 'location') {
      this.props.onInputChange('shippingMethod', '0');
      this.props.onGetShippingMethods(value);
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onNextStep();
  }

  isSubmitDisabled = () => {
    const {
      name, surname, email, tel, province, location, calle, altura, zipCode, shippingForm, shippingMethod
    } = this.props.data;
    const intShippingForm = parseInt(shippingForm, 10);
    const intProvince = parseInt(province, 10);
    const intLocation = parseInt(location, 10);
    const intShippingMethod = parseInt(shippingMethod, 10);
    if (intShippingForm === WITHOUT_SELECTION) return true;
    if (intShippingForm === WITHDRAW_OPTION) return false;
    if (
      name && surname && email && tel && intProvince && intLocation && calle && altura && intShippingMethod && zipCode
    ) { return false; }
    return true;
  }

  renderProvinces = () => {
    const { provinces } = this.props;
    if (!provinces.length) return null;
    return provinces.map(this.renderOption);
  }

  renderLocations = () => {
    const { locations } = this.props;
    if (!locations.length) return null;
    return locations.map(this.renderOption);
  }

  renderShippingForms = () => {
    const { shippingForms } = this.props;
    if (!shippingForms.length) return null;
    return shippingForms.map(this.renderOption);
  }

  renderShippingMethods = () => {
    const { shippingMethods } = this.props;
    if (!shippingMethods.length) return null;
    return shippingMethods.map(this.renderOption);
  }

  renderOption = option => (
    <option key={option.id} value={option.id}>{option.name}</option>
  )

  render() {
    const {
      name,
      surname,
      email,
      tel,
      province,
      location,
      calle,
      altura,
      piso,
      departamento,
      zipCode,
      shippingForm,
      shippingMethod
    } = this.props.data;
    const deliveryForm = parseInt(shippingForm, 10);
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Title>Forma de entrega</Title>
          <Label>Seleccioná la forma de entrega</Label>
          <Select name="shippingForm" value={shippingForm} onChange={this.handleChange} required>
            <option value="0">Seleccioná la forma de entrega</option>
            {this.renderShippingForms()}
          </Select>
        </FormGroup>
        {deliveryForm === WITHDRAW_OPTION && <LocalInfo />}
        {deliveryForm === SHIPPING_OPTION
          && (
            <div>
              <FormGroup>
                <Title>Datos de contacto</Title>
                <InputGroup>
                  <div>
                    <Label>Nombre *</Label>
                    <Input name="name" type="text" value={name} onChange={this.handleChange} required />
                  </div>
                  <div>
                    <Label>Apellido *</Label>
                    <Input name="surname" type="text" value={surname} onChange={this.handleChange} required />
                  </div>
                  <div>
                    <Label>E-mail *</Label>
                    <Input name="email" type="text" value={email} onChange={this.handleChange} required />
                  </div>
                  <div>
                    <Label>Teléfono *</Label>
                    <Input name="tel" type="text" value={tel} onChange={this.handleChange} required />
                  </div>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Title>Dirección de destino</Title>
                <InputGroup>
                  <div>
                    <Label>Provincia *</Label>
                    <Select name="province" value={province} onChange={this.handleChange} required>
                      <option value="0">Seleccionar provincia</option>
                      {this.renderProvinces()}
                    </Select>
                  </div>
                  <div>
                    <Label>Localidad *</Label>
                    <Select name="location" value={location} onChange={this.handleChange} required>
                      <option value="0">Seleccionar localidad</option>
                      {this.renderLocations()}
                    </Select>
                  </div>
                </InputGroup>
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
              </FormGroup>
              <FormGroup>
                <Title>Método de envío</Title>
                <Label>Seleccioná un método de envío *</Label>
                <Select name="shippingMethod" value={shippingMethod} onChange={this.handleChange} required>
                  <option value="0">Seleccioná un método de envío</option>
                  {this.renderShippingMethods()}
                </Select>
              </FormGroup>
            </div>
          )
        }
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
  provinces: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  shippingForms: PropTypes.array.isRequired,
  shippingMethods: PropTypes.array.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onPrevStep: PropTypes.func.isRequired,
  onNextStep: PropTypes.func.isRequired,
  onGetProvinces: PropTypes.func.isRequired,
  onGetLocations: PropTypes.func.isRequired,
  onGetShippingMethods: PropTypes.func.isRequired
};

export default ShippingSelection;
