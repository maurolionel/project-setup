import { connect } from 'react-redux';
import TopBar from './component';
import { modalSchedulesOpen, modalShippingsOpen } from '../../../../../../services/modals/actions';

const mapDispatchToProps = dispatch => ({
  onOpenModalSchedules: () => dispatch(modalSchedulesOpen()),
  onOpenModalShippings: () => dispatch(modalShippingsOpen()),
});

const TopBarContainer = connect(null, mapDispatchToProps)(TopBar);

export default TopBarContainer;
