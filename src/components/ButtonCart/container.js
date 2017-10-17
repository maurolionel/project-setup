import { connect } from 'react-redux';
import ButtonCart from './component';
import { shoppingCartIncreaseThunk } from '../../services/shoppingCart/thunks';
import { shoppingCartRemove } from '../../services/shoppingCart/actions';

const mapStateToProps = ({ shoppingCart: { all } }, ownProps) => {
  const product = all.find(p => ownProps.productId === p.id);
  const isInCart = Boolean(product);
  return {
    isNotInCart: !isInCart,
    quantity: isInCart && product.quantity
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  addToCart: () => dispatch(shoppingCartIncreaseThunk(ownProps.productId, 1)),
  removeFromCart: () => dispatch(shoppingCartRemove({ product: { id: ownProps.productId } }))
});

const ButtonCartContainer = connect(mapStateToProps, mapDispatchToProps)(ButtonCart);

export default ButtonCartContainer;
