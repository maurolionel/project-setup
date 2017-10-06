import { connect } from 'react-redux';
import CartTable from './component';
import { shoppingCartIncreaseThunk, shoppingCartDecreaseThunk } from '../../../../services/shoppingCart/thunks';
import { shoppingCartRemove } from '../../../../services/shoppingCart/actions';
import config from '../../../../config';

const mapStateToProps = ({ shoppingCart, categories }) => ({
  products: shoppingCart.all,
  staticPath: `${config.api.path}images/`,
  categories: categories.all
});

const mapDispatchToProps = dispatch => ({
  onIncreaseQuantity: productId => dispatch(shoppingCartIncreaseThunk(productId, 1)),
  onDecreaseQuantity: productId => dispatch(shoppingCartDecreaseThunk(productId, 1)),
  onRemoveFromCart: productId => dispatch(shoppingCartRemove({ product: { id: productId } }))
});

const CartTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartTable);

export default CartTableContainer;
