import { connect } from 'react-redux';
import ShoppingCart from './component';
import { shoppingCartIncreaseThunk, shoppingCartDecreaseThunk } from '../../services/shoppingCart/thunks';
import { shoppingCartRemove } from '../../services/shoppingCart/actions';

const mapStateToProps = ({ shoppingCart }) => ({
  productsInCart: shoppingCart.all
});

const mapDispatchToProps = dispatch => ({
  onIncreaseQuantity: productId => dispatch(shoppingCartIncreaseThunk(productId, 1)),
  onDecreaseQuantity: productId => dispatch(shoppingCartDecreaseThunk(productId, 1)),
  onRemoveFromCart: productId => dispatch(shoppingCartRemove({ product: { id: productId } }))
});

const ShoppingCartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);

export default ShoppingCartContainer;
