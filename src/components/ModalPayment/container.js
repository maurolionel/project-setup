import { connect } from 'react-redux';
import ModalPayment from './component';

const mapStateToProps = ({ modals, purchase }) => ({
  url: purchase.url,
  isOpen: modals.payment.isOpen,
  isLoading: purchase.isLoadingMP
});

const ModalPaymentContainer = connect(mapStateToProps, null)(ModalPayment);

export default ModalPaymentContainer;
