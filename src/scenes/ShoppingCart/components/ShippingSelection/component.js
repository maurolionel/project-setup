import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../../../../components/Title';
import Label from '../../../../components/Label';
import Input from '../../../../components/Input';
import Select from '../../../../components/Select';

const USER_CHOSE_LOCAL = 1;
const USER_CHOSE_DELIVERY = 2;

const Wrapper = styled.div`
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

const RowWrapper = styled.div`
  display: flex;
  > div {
    &:first-child { flex: 2; }
    flex: 1;
  }
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
    selectedProvinceId: 0,
    selectedDeliveryForm: 0,
    activeLocations: []
  }

  componentDidMount() {
    if (!this.props.provinces.length) this.props.onGetProvinces();
    if (!this.props.locations.length) this.props.onGetLocations();
  }

  setActiveLocations = () => {
    const { selectedProvinceId } = this.state;
    const { locations } = this.props;
    const activeLocations = locations.filter(l => l.provinceId === selectedProvinceId);
    this.setState({ activeLocations });
  }

  selectDeliveryForm = ({ target: { value } }) => {
    const selectedDeliveryForm = parseInt(value, 10);
    this.setState({ selectedDeliveryForm }, () => this.setActiveLocations());
  }

  selectProvince = ({ target: { value } }) => {
    const selectedProvinceId = parseInt(value, 10);
    this.setState({ selectedProvinceId }, () => this.setActiveLocations());
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

  renderOption = option => (
    <option key={option.id} value={option.id}>{option.name}</option>
  )

  render() {
    return (
      <Wrapper>
        <FormGroup>
          <Title>Forma de entrega</Title>
          <Label>Seleccioná la forma de entrega</Label>
          <Select value={this.state.selectedDeliveryForm} onChange={this.selectDeliveryForm}>
            <option value="0">Seleccioná la forma de entrega</option>
            <option value={USER_CHOSE_LOCAL}>Retiro en el local</option>
            <option value={USER_CHOSE_DELIVERY}>Envío a domicilio</option>
          </Select>
        </FormGroup>
        {this.state.selectedDeliveryForm === USER_CHOSE_LOCAL && <LocalInfo />}
        {this.state.selectedDeliveryForm === USER_CHOSE_DELIVERY
          && (
            <div>
              <FormGroup>
                <Title>Datos de contacto</Title>
                <InputGroup>
                  <div>
                    <Label>Nombre</Label>
                    <Input type="text" />
                  </div>
                  <div>
                    <Label>Apellido</Label>
                    <Input type="text" />
                  </div>
                  <div>
                    <Label>Teléfono</Label>
                    <Input type="text" />
                  </div>
                </InputGroup>
              </FormGroup>
              <RowWrapper>
                <FormGroup>
                  <Title>Dirección de destino</Title>
                  <InputGroup>
                    <div>
                      <Label>Provincia</Label>
                      <Select value={this.state.selectedProvinceId} onChange={this.selectProvince}>
                        <option value="0">Seleccionar provincia</option>
                        {this.renderProvinces()}
                      </Select>
                    </div>
                    <div>
                      <Label>Localidad</Label>
                      <Select disabled={!this.state.activeLocations.length}>
                        {this.renderLocations()}
                      </Select>
                    </div>
                  </InputGroup>
                  <InputGroup>
                    <div>
                      <Label>Calle</Label>
                      <Input type="text" />
                    </div>
                    <div>
                      <Label>Altura</Label>
                      <Input type="text" />
                    </div>
                  </InputGroup>
                  <InputGroup>
                    <div>
                      <Label>Piso</Label>
                      <Input type="text" />
                    </div>
                    <div>
                      <Label>Departamento</Label>
                      <Input type="text" />
                    </div>
                    <div>
                      <Label>Código postal</Label>
                      <Input type="text" />
                    </div>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Title>Método de envío</Title>
                  <Label>Seleccioná un método de envío</Label>
                  <Select>
                    <option value="0">Correo argentino</option>
                    <option value="1">Micro desde Retiro</option>
                    <option value="2">Moto</option>
                  </Select>
                </FormGroup>
              </RowWrapper>
            </div>
          )
        }
      </Wrapper>
    );
  }
}

ShippingSelection.propTypes = {
  provinces: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired,
  onGetProvinces: PropTypes.func.isRequired,
  onGetLocations: PropTypes.func.isRequired
};

export default ShippingSelection;
