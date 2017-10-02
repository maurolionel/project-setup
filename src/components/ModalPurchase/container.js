import { connect } from 'react-redux';
import ModalPurchase from './component';

const mapStateToProps = ({ modals }) => ({
  isOpen: modals.purchase.isOpen
});

const ModalPurchaseContainer = connect(mapStateToProps, null)(ModalPurchase);

export default ModalPurchaseContainer;
