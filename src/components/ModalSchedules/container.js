import { connect } from 'react-redux';
import ModalSchedules from './component';

const mapStateToProps = ({ modals }) => ({
  isOpen: modals.schedules.isOpen
});

const ModalSchedulesContainer = connect(mapStateToProps, null)(ModalSchedules);

export default ModalSchedulesContainer;
