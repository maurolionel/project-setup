import { connect } from 'react-redux';
import ShoppingCart from './component';
import { shoppingCartDecrementThunk } from '../../services/shoppingCart/thunks';

const mapStateToProps = ({ shoppingCart }) => ({
  productsInCart: shoppingCart.all
});

const mapDispatchToProps = dispatch => ({
  onDecrementQuantity: productId => dispatch(shoppingCartDecrementThunk(productId, 1))
});

const ShoppingCartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);

export default ShoppingCartContainer;
