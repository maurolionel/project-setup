import { connect } from 'react-redux';
import ShoppingList from './component';
import { shoppingCartIncreaseThunk, shoppingCartDecreaseThunk } from '../../../../services/shoppingCart/thunks';
import { shoppingCartRemove } from '../../../../services/shoppingCart/actions';

const mapStateToProps = ({ shoppingCart }) => ({
  listOfProducts: shoppingCart.all
});

const mapDispatchToProps = dispatch => ({
  onIncreaseQuantity: productId => dispatch(shoppingCartIncreaseThunk(productId, 1)),
  onDecreaseQuantity: productId => dispatch(shoppingCartDecreaseThunk(productId, 1)),
  onRemoveFromCart: productId => dispatch(shoppingCartRemove({ product: { id: productId } }))
});

const ShoppingListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList);

export default ShoppingListContainer;