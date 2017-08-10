import { connect } from 'react-redux';
import ShoppingCart from './component';

const mapStateToProps = ({ shoppingCart }) => ({
  productsInCart: shoppingCart.all
});

const ShoppingCartContainer = connect(
  mapStateToProps,
  null
)(ShoppingCart);

export default ShoppingCartContainer;
