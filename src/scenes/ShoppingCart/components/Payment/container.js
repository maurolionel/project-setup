import { connect } from 'react-redux';
import Payment from './component';
import { createPreference } from '../../../../services/purchase/thunks';

const mapStateToProps = ({ paymentTypes, shoppingCart }) => ({
  paymentTypes,
  products: shoppingCart.all
});

const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch(createPreference())
});

const PaymentContainer = connect(mapStateToProps, mapDispatchToProps)(Payment);

export default PaymentContainer;
