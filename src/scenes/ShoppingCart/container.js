import { connect } from 'react-redux';
import ShoppingCart from './component';

const mapStateToProps = ({ shoppingCart }) => ({
  isCartFilled: Boolean(shoppingCart.all.length)
});

const ShoppingCartContainer = connect(
  mapStateToProps,
  null
)(ShoppingCart);

export default ShoppingCartContainer;
