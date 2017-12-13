import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TopBar from './component';
import { modalSchedulesOpen, modalShippingsOpen } from '../../../../../../services/modals/actions';
import { hideCartPopover, showCartPopover } from '../../../../../CartPopover/actions';

const mapStateToProps = ({ shoppingCart }) => ({
  totalProducts: shoppingCart.all.length
});

const mapDispatchToProps = dispatch => ({
  onHideCartPopover: () => dispatch(hideCartPopover()),
  onOpenModalSchedules: () => dispatch(modalSchedulesOpen()),
  onOpenModalShippings: () => dispatch(modalShippingsOpen()),
  onShowCartPopover: () => dispatch(showCartPopover())
});

const TopBarContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBar));

export default TopBarContainer;
