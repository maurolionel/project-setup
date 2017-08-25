import { connect } from 'react-redux';
import Shortcuts from './component';
import { modalSchedulesOpen } from '../../../../services/modals/actions';

const mapDispatchToProps = dispatch => ({
  onOpenModalSchedules: () => dispatch(modalSchedulesOpen())
});

const ShortcutsContainer = connect(null, mapDispatchToProps)(Shortcuts);

export default ShortcutsContainer;
