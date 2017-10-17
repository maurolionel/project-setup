import { connect } from 'react-redux';
import TopBar from './component';
import { modalSchedulesOpen, modalShippingsOpen } from '../../../../../../services/modals/actions';

const mapStateToProps = ({ shoppingCart }) => ({
  totalProducts: shoppingCart.all.length
});

const mapDispatchToProps = dispatch => ({
  onOpenModalSchedules: () => dispatch(modalSchedulesOpen()),
  onOpenModalShippings: () => dispatch(modalShippingsOpen()),
});

const TopBarContainer = connect(mapStateToProps, mapDispatchToProps)(TopBar);

export default TopBarContainer;
