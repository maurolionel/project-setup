import { connect } from 'react-redux';
import CartPopover from './component';

const mapStateToProps = ({ products, routing, shoppingCart, ui }) => ({
  canMount: routing.location.pathname !== '/carrito',
  isCartFullfilled: Boolean(shoppingCart.all.length),
  isLoadingProducts: products.isFetching,
  isVisible: ui.cartPopover.isVisible
});

const CartPopoverContainer = connect(mapStateToProps, null)(CartPopover);

export default CartPopoverContainer;
