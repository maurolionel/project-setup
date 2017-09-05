import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../../../../components/Title';
import Label from '../../../../components/Label';
import Input from '../../../../components/Input';
import Select from '../../../../components/Select';

const USER_CHOSE_LOCAL = 1;
const USER_CHOSE_DELIVERY = 2;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  > div {
    flex: 1;
    &:nth-child(2) {
      flex: 2;
    }
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

const LocalInfo = () => (
  <div>
    <FormGroup>
      <Title>Dirección de retiro</Title>
      <p>Agüero 927 / 931, entre San Luis y Av. Córdoba, Ciudad Autónoma de Buenos Aires, Argentina.</p>
      <br />
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
  </div>
);

class ShippingSelection extends PureComponent {
  state = {
    activeLocations: [],
    form: '0',
    name: '',
    surname: '',
    tel: '',
    province: '0',
    location: '0',
    calle: '',
    altura: '',
    piso: '',
    departamento: '',
    zipCode: '',
    shippingMethod: '0'
  }

  componentDidMount() {
    if (!this.props.provinces.length) this.props.onGetProvinces();
    if (!this.props.locations.length) this.props.onGetLocations();
    if (!this.props.shippingMethods.length) this.props.onGetShippingMethods();
  }

  setActiveLocations = () => {
    const { province } = this.state;
    const { locations } = this.props;
    const activeLocations = locations.filter(l => l.provinceId === parseInt(province, 10));
    this.setState({ activeLocations });
  }

  selectProvince = ({ target: { value } }) => {
    this.setState({ province: value }, () => this.setActiveLocations());
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('STATE:', this.state);
  }

  saveInputValue = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  renderProvinces = () => {
    const { provinces } = this.props;
    if (!provinces.length) return null;
    return provinces.map(this.renderOption);
  }

  renderLocations = () => {
    const { activeLocations } = this.state;
    if (!activeLocations.length) return this.renderEmptyLocationsOption();
    return activeLocations.map(this.renderOption);
  }

  renderEmptyLocationsOption = () => (
    <option value="0">Primero seleccioná una provincia</option>
  )

  renderShippingMethods = () => {
    const { shippingMethods } = this.props;
    if (!shippingMethods.length) return null;
    return shippingMethods.map(this.renderOption);
  }

  renderOption = option => (
    <option key={option.id} value={option.id}>{option.name}</option>
  )

  render() {
    const deliveryForm = parseInt(this.state.form, 10);
    const {
      activeLocations,
      form,
      name,
      surname,
      tel,
      province,
      location,
      calle,
      altura,
      piso,
      departamento,
      zipCode,
      shippingMethod
    } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Title>Forma de entrega</Title>
          <Label>Seleccioná la forma de entrega</Label>
          <Select
            name="form"
            value={form}
            onChange={this.saveInputValue}
          >
            <option value="0">Seleccioná la forma de entrega</option>
            <option value={USER_CHOSE_LOCAL}>Retiro en el local</option>
            <option value={USER_CHOSE_DELIVERY}>Envío a domicilio</option>
          </Select>
        </FormGroup>
        {deliveryForm === USER_CHOSE_LOCAL && <LocalInfo />}
        {deliveryForm === USER_CHOSE_DELIVERY
          && (
            <div>
              <FormGroup>
                <Title>Datos de contacto</Title>
                <InputGroup>
                  <div>
                    <Label>Nombre</Label>
                    <Input name="name" type="text" value={name} onChange={this.saveInputValue} />
                  </div>
                  <div>
                    <Label>Apellido</Label>
                    <Input name="surname" type="text" value={surname} onChange={this.saveInputValue} />
                  </div>
                  <div>
                    <Label>Teléfono</Label>
                    <Input name="tel" type="text" value={tel} onChange={this.saveInputValue} />
                  </div>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Title>Dirección de destino</Title>
                <InputGroup>
                  <div>
                    <Label>Provincia</Label>
                    <Select name="province" value={province} onChange={this.selectProvince}>
                      <option value="0">Seleccionar provincia</option>
                      {this.renderProvinces()}
                    </Select>
                  </div>
                  <div>
                    <Label>Localidad</Label>
                    <Select
                      name="location"
                      value={location}
                      onChange={this.saveInputValue}
                      disabled={!activeLocations.length}
                    >
                      {this.renderLocations()}
                    </Select>
                  </div>
                </InputGroup>
                <InputGroup>
                  <div>
                    <Label>Calle</Label>
                    <Input name="calle" type="text" value={calle} onChange={this.saveInputValue} />
                  </div>
                  <div>
                    <Label>Altura</Label>
                    <Input name="altura" type="text" value={altura} onChange={this.saveInputValue} />
                  </div>
                </InputGroup>
                <InputGroup>
                  <div>
                    <Label>Piso</Label>
                    <Input name="piso" type="text" value={piso} onChange={this.saveInputValue} />
                  </div>
                  <div>
                    <Label>Departamento</Label>
                    <Input name="departamento" type="text" value={departamento} onChange={this.saveInputValue} />
                  </div>
                  <div>
                    <Label>Código postal</Label>
                    <Input name="zipCode" type="text" value={zipCode} onChange={this.saveInputValue} />
                  </div>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Title>Método de envío</Title>
                <Label>Seleccioná un método de envío</Label>
                <Select
                  name="shippingMethod"
                  value={shippingMethod}
                  onChange={this.saveInputValue}
                >
                  <option value="0">Seleccioná un método de envío</option>
                  {this.renderShippingMethods()}
                </Select>
              </FormGroup>
            </div>
          )
        }
        <Input type="submit" value="Siguiente" primary />
      </Form>
    );
  }
}

ShippingSelection.propTypes = {
  provinces: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired,
  shippingMethods: PropTypes.array.isRequired,
  onGetProvinces: PropTypes.func.isRequired,
  onGetLocations: PropTypes.func.isRequired,
  onGetShippingMethods: PropTypes.func.isRequired
};

export default ShippingSelection;
