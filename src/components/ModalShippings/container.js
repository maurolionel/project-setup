import { connect } from 'react-redux';
import ModalShippings from './component';

const mapStateToProps = ({ modals }) => ({
  isOpen: modals.shippings.isOpen
});

const ModalShippingsContainer = connect(mapStateToProps, null)(ModalShippings);

export default ModalShippingsContainer;
