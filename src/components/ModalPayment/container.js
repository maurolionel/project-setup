import { connect } from 'react-redux';
import ModalPayment from './component';
import { getPreference } from '../../services/purchase/thunks';

const mapStateToProps = ({ modals, purchase }) => ({
  url: purchase.preference.url,
  isOpen: modals.payment.isOpen,
  isLoading: purchase.isLoadingMP
});

const mapDispatchToProps = dispatch => ({
  onPurchaseEnd: () => dispatch(getPreference())
});

const ModalPaymentContainer = connect(mapStateToProps, mapDispatchToProps)(ModalPayment);

export default ModalPaymentContainer;
