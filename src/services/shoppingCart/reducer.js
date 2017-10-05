import {
  SHOPPING_CART_INCREASE,
  SHOPPING_CART_ADD,
  SHOPPING_CART_DECREASE,
  SHOPPING_CART_REMOVE,
  SHOPPING_CART_EMPTY
} from './actionTypes';

const initialState = {
  all: []
};

function shoppingCartReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SHOPPING_CART_INCREASE: {
      const { product, quantity } = action.payload;
      const all = state.all.map((aProductInCart) => {
        if (aProductInCart.id !== product.id) {
          return aProductInCart;
        }
        return {
          ...aProductInCart,
          quantity: aProductInCart.quantity + quantity
        };
      });
      return {
        ...state,
        all
      };
    }
    case SHOPPING_CART_ADD: {
      const { product, quantity } = action.payload;
      return {
        ...state,
        all: [
          ...state.all,
          {
            ...product,
            quantity
          }
        ]
      };
    }
    case SHOPPING_CART_DECREASE: {
      const { product, quantity } = action.payload;
      const all = state.all.map((aProductInCart) => {
        if (aProductInCart.id !== product.id) {
          return aProductInCart;
        }
        return {
          ...aProductInCart,
          quantity: aProductInCart.quantity - quantity
        };
      });
      return {
        ...state,
        all
      };
    }
    case SHOPPING_CART_REMOVE: {
      const all = state.all.filter(aProductInCart => aProductInCart.id !== action.payload.product.id);
      return {
        ...state,
        all
      };
    }
    case SHOPPING_CART_EMPTY:
      return initialState;
    default:
      return state;
  }
}

export default shoppingCartReducer;
