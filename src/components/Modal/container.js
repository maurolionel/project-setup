import { connect } from 'react-redux';
import Modal from './component';
import { modalCloseAll } from '../../services/modals/actions';

const mapDispatchToProps = dispatch => ({
  onCloseAll: () => dispatch(modalCloseAll())
});

const ModalContainer = connect(null, mapDispatchToProps)(Modal);

export default ModalContainer;
