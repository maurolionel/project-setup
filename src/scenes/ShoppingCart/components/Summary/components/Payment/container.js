import { connect } from 'react-redux';
import Payment from './component';

const getPaymentTypesAvailable = ({ paymentTypes, purchase: { data: { shippingForm, shippingMethod } } }) => {
  const isShippingFormAcceptingCash = shippingForm === '1';
  const isShippingMethodAcceptingCash = shippingMethod === '1' || shippingMethod === '5' || shippingMethod === '6';
  if (isShippingFormAcceptingCash || isShippingMethodAcceptingCash) return paymentTypes;
  const extractCashType = type => type.id !== 1;
  return paymentTypes.filter(extractCashType);
};

const mapStateToProps = state => ({
  paymentTypes: getPaymentTypesAvailable(state)
});

const PaymentContainer = connect(mapStateToProps, null)(Payment);

export default PaymentContainer;
