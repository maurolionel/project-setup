import { connect } from 'react-redux';
import CartList from './component';
import { shoppingCartRemove } from '../../../../services/shoppingCart/actions';
import { shoppingCartDecreaseThunk, shoppingCartIncreaseThunk } from '../../../../services/shoppingCart/thunks';

const mapStateToProps = ({ shoppingCart }) => ({
  products: shoppingCart.all
});

const mapDispatchToProps = dispatch => ({
  onDecreaseQuantity: productId => dispatch(shoppingCartDecreaseThunk(productId, 1)),
  onIncreaseQuantity: productId => dispatch(shoppingCartIncreaseThunk(productId, 1)),
  onRemoveFromCart: productId => dispatch(shoppingCartRemove({ product: { id: productId } }))
});

const CartListContainer = connect(mapStateToProps, mapDispatchToProps)(CartList);

export default CartListContainer;
