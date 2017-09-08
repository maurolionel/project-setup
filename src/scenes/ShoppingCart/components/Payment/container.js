import { connect } from 'react-redux';
import Payment from './component';
import { createPreference } from '../../../../services/purchase/thunks';

const mapStateToProps = ({ paymentTypes, shoppingCart, purchase }) => ({
  paymentTypes,
  products: shoppingCart.all[0],
  mercadoPagoUrl: purchase.url,
  isLoadingMP: purchase.isLoadingMP
});

const mapDispatchToProps = dispatch => ({
  onSubmit: products => dispatch(createPreference(products))
});

const PaymentContainer = connect(mapStateToProps, mapDispatchToProps)(Payment);

export default PaymentContainer;
