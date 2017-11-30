import { connect } from 'react-redux';
import ModalPurchase from './component';
import { purchaseEnd } from '../../services/thunks';

const mapStateToProps = ({ modals, purchase }) => ({
  email: purchase.data.email,
  isOpen: modals.purchase.isOpen
});

const mapDispatchToProps = dispatch => ({
  onPurchaseEnd: () => dispatch(purchaseEnd())
});

const ModalPurchaseContainer = connect(mapStateToProps, mapDispatchToProps)(ModalPurchase);

export default ModalPurchaseContainer;
