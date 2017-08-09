import { shoppingCartAdd, shoppingCartIncrement, shoppingCartDecrement, shoppingCartRemove } from './actions';
import { formatValidNumber, getProductFromState, productIsAlreadyInCart } from './selectors';

const shoppingCartAddThunk = (productId, quantity) => (dispatch, getState) => {
  const state = getState();
  const product = getProductFromState(state.products.all, productId);
  const validQuantity = formatValidNumber(quantity);
  const action = productIsAlreadyInCart(state.shoppingCart.all, productId)
    ? shoppingCartIncrement({ product, quantity: validQuantity })
    : shoppingCartAdd({ product, quantity: validQuantity });
  dispatch(action);
};

const shoppingCartDecrementThunk = (productId, quantity) => (dispatch, getState) => {
  const state = getState();
  const product = getProductFromState(state.products.all, productId);
  const validQuantity = formatValidNumber(quantity);
  const action = productIsAlreadyInCart(state.shoppingCart.all, productId)
    ? shoppingCartDecrement({ product, quantity: validQuantity })
    : shoppingCartRemove({ product, quantity: validQuantity });
  dispatch(action);
};

export {
  shoppingCartAddThunk,
  shoppingCartDecrementThunk
};
