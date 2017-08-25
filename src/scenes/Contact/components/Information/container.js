import { connect } from 'react-redux';
import Information from './component';
import { modalSchedulesOpen, modalShippingsOpen } from '../../../../services/modals/actions';

const mapDispatchToProps = dispatch => ({
  onOpenModalSchedules: () => dispatch(modalSchedulesOpen()),
  onOpenModalShippings: () => dispatch(modalShippingsOpen())
});

const InformationContainer = connect(null, mapDispatchToProps)(Information);

export default InformationContainer;
