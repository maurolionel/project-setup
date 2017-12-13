import { connect } from 'react-redux';
import CartPopover from './component';

const mapStateToProps = ({ routing, shoppingCart, ui }) => ({
  canMount: routing.location.pathname !== '/carrito',
  isCartEmpty: Boolean(shoppingCart.all.length),
  isVisible: ui.cartPopover.isVisible
});

const CartPopoverContainer = connect(mapStateToProps, null)(CartPopover);

export default CartPopoverContainer;
