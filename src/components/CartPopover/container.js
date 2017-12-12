import { connect } from 'react-redux';
import CartPopover from './component';

const mapStateToProps = ({ shoppingCart }) => ({
  products: shoppingCart.all
});

const CartPopoverContainer = connect(mapStateToProps, null)(CartPopover);

export default CartPopoverContainer;
