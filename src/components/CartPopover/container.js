import { connect } from 'react-redux';
import CartPopover from './component';

const mapStateToProps = ({ products, routing, shoppingCart, ui }) => ({
  canMount: routing.location.pathname !== '/carrito' && products.all.length,
  isCartEmpty: Boolean(shoppingCart.all.length),
  isVisible: ui.cartPopover.isVisible
});

const CartPopoverContainer = connect(mapStateToProps, null)(CartPopover);

export default CartPopoverContainer;
