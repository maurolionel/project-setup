import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Title from '../../../../../../components/Title';
import Label from '../../../../../../components/Label';
import Select from '../../../../../../components/Select';

class Payment extends PureComponent {
  state = {
    selectedPaymentType: '0'
  }

  selectPayment = ({ target: { value } }) => this.setState({ selectedPaymentType: value });

  renderOption = p => <option key={p.id} value={p.id}>{p.name}</option>;

  render() {
    const { paymentTypes } = this.props;
    const { selectedPaymentType } = this.state;
    return (
      <div>
        <Title>Método de pago</Title>
        <Label htmlFor="paymentTypes">Seleccioná el método de pago</Label>
        <Select id="paymentTypes" value={selectedPaymentType} onChange={this.selectPayment}>
          <option value="0">Seleccioná el método de pago</option>
          {paymentTypes.map(this.renderOption)}
        </Select>
      </div>
    );
  }
}

Payment.propTypes = {
  paymentTypes: PropTypes.array.isRequired
};

export default Payment;
