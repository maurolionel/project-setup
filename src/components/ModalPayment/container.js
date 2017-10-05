import { connect } from 'react-redux';
import ModalPayment from './component';
import { purchaseEnd } from '../../services/thunks';

const mapStateToProps = ({ modals, purchase }) => ({
  url: purchase.url,
  isOpen: modals.payment.isOpen,
  isLoading: purchase.isLoadingMP
});

const mapDispatchToProps = dispatch => ({
  onPurchaseEnd: () => dispatch(purchaseEnd())
});

const ModalPaymentContainer = connect(mapStateToProps, mapDispatchToProps)(ModalPayment);

export default ModalPaymentContainer;
