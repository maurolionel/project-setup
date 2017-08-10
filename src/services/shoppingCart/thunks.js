import { shoppingCartIncrease, shoppingCartAdd, shoppingCartDecrease, shoppingCartRemove } from './actions';
import { formatValidNumber, getProductFromState, isProductInCart } from './selectors';

const shoppingCartIncreaseThunk = (productId, quantity) => (dispatch, getState) => {
  const state = getState();
  const product = getProductFromState(state.products.all, productId);
  const validQuantity = formatValidNumber(quantity);
  const action = isProductInCart(state.shoppingCart.all, productId)
    ? shoppingCartIncrease({ product, quantity: validQuantity })
    : shoppingCartAdd({ product, quantity: validQuantity });
  dispatch(action);
};

const shoppingCartDecreaseThunk = (productId, quantity) => (dispatch, getState) => {
  const state = getState();
  const product = getProductFromState(state.shoppingCart.all, productId);
  const validQuantity = formatValidNumber(quantity);
  const isTheLastItem = product.quantity === 1;
  const action = isTheLastItem
    ? shoppingCartRemove({ product })
    : shoppingCartDecrease({ product, quantity: validQuantity });
  dispatch(action);
};

export {
  shoppingCartIncreaseThunk,
  shoppingCartDecreaseThunk
};
