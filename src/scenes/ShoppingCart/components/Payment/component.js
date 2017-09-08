import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../../../../components/Title';
import Label from '../../../../components/Label';
import Button from '../../../../components/Button';
import Select from '../../../../components/Select';

const ActionGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
`;


class Payment extends PureComponent {
  state = {
    selectedPaymentType: '0'
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.props.products);
  }

  selectPayment = ({ target: { value } }) => this.setState({ selectedPaymentType: value });

  renderPaymentType = p => <option key={p.id} value={p.id}>{p.name}</option>;

  render() {
    const { selectedPaymentType } = this.state;
    const { paymentTypes, mercadoPagoUrl, isLoadingMP, onPrevStep } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Title>Método de pago</Title>
          <Label htmlFor="paymentTypes">Seleccioná el método de pago</Label>
          <Select id="paymentTypes" value={selectedPaymentType} onChange={this.selectPayment}>
            <option value="0">Seleccioná el método de pago</option>
            {paymentTypes.map(this.renderPaymentType)}
          </Select>
          <ActionGroup>
            <Button onClick={onPrevStep}>Ver paso anterior</Button>
            <Button type="submit" primary disabled={parseInt(selectedPaymentType, 10) === 0}>Comprar</Button>
          </ActionGroup>
        </form>
        {isLoadingMP && <p>Cargando...</p>}
        {mercadoPagoUrl
          ? (
            <iframe
              src={mercadoPagoUrl}
              frameBorder="0"
              style={{
                width: '100%',
                height: 500,
                border: 0
              }}
              title="MercadoPago"
            />)
          : null
        }
      </div>
    );
  }
}

Payment.propTypes = {
  paymentTypes: PropTypes.array.isRequired,
  mercadoPagoUrl: PropTypes.string.isRequired,
  isLoadingMP: PropTypes.bool.isRequired,
  products: PropTypes.object.isRequired,
  onPrevStep: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Payment;
