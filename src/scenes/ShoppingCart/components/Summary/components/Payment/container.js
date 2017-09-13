import { connect } from 'react-redux';
import Payment from './component';

const getPaymentTypesAvailable = (state) => {
  const isWithdrawForm = state.purchase.data.shippingForm === '1';
  const isMotorbikeMethod = state.purchase.data.shippingMethod === '1';
  if (isWithdrawForm || isMotorbikeMethod) return state.paymentTypes;
  const extractCashType = type => type.id !== 1;
  return state.paymentTypes.filter(extractCashType);
};

const mapStateToProps = state => ({
  paymentTypes: getPaymentTypesAvailable(state)
});

const PaymentContainer = connect(mapStateToProps, null)(Payment);

export default PaymentContainer;
