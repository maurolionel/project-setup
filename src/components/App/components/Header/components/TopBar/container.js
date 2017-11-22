import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TopBar from './component';
import { modalSchedulesOpen, modalShippingsOpen } from '../../../../../../services/modals/actions';

const mapStateToProps = ({ shoppingCart }) => ({
  totalProducts: shoppingCart.all.length
});

const mapDispatchToProps = dispatch => ({
  onOpenModalSchedules: () => dispatch(modalSchedulesOpen()),
  onOpenModalShippings: () => dispatch(modalShippingsOpen()),
});

const TopBarContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBar));

export default TopBarContainer;
