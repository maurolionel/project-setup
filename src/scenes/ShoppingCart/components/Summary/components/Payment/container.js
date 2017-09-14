import { connect } from 'react-redux';
import Payment from './component';
import { selectPayment } from '../../../../../../services/purchase/actions';

const getPaymentTypesAvailable = ({ paymentTypes, purchase: { data: { shippingForm, shippingMethod } } }) => {
  const isShippingFormAcceptingCash = shippingForm === '1';
  const isShippingMethodAcceptingCash = shippingMethod === '1' || shippingMethod === '5' || shippingMethod === '6';
  if (isShippingFormAcceptingCash || isShippingMethodAcceptingCash) return paymentTypes;
  const extractCashType = type => type.id !== 1;
  return paymentTypes.filter(extractCashType);
};

const mapStateToProps = state => ({
  paymentTypes: getPaymentTypesAvailable(state),
  selectedPaymentType: state.purchase.paymentType
});

const mapDispatchToProps = dispatch => ({
  onSelectPayment: paymentType => dispatch(selectPayment({ paymentType }))
});

const PaymentContainer = connect(mapStateToProps, mapDispatchToProps)(Payment);

export default PaymentContainer;
