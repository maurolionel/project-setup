import { connect } from 'react-redux';
import Information from './component';
import { modalSchedulesOpen } from '../../../../services/modals/actions';

const mapDispatchToProps = dispatch => ({
  onOpenModalSchedules: () => dispatch(modalSchedulesOpen())
});

const InformationContainer = connect(null, mapDispatchToProps)(Information);

export default InformationContainer;
