import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../../../../../components/Title';
import Label from '../../../../../../components/Label';
import Select from '../../../../../../components/Select';

const Payment = ({ paymentTypes, selectedPaymentType, onSelectPaymentType }) => {
  const handleChange = ({ target: { value } }) => onSelectPaymentType(value);
  const renderOption = p => <option key={p.id} value={p.id}>{p.name}</option>;
  return (
    <div>
      <Title>Método de pago</Title>
      <Label htmlFor="paymentTypes">Seleccioná el método de pago</Label>
      <Select id="paymentTypes" value={selectedPaymentType} onChange={handleChange}>
        <option value="0">Seleccioná el método de pago</option>
        {paymentTypes.map(renderOption)}
      </Select>
    </div>
  );
};

Payment.propTypes = {
  paymentTypes: PropTypes.array.isRequired,
  selectedPaymentType: PropTypes.number.isRequired,
  onSelectPaymentType: PropTypes.func.isRequired
};

export default Payment;
