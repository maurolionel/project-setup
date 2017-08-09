import { SHOPPING_CART_ADD, SHOPPING_CART_INCREMENT, SHOPPING_CART_DECREMENT, SHOPPING_CART_REMOVE } from './actionTypes';

const initialState = {
  all: []
};

function shoppingCartReducer(state = initialState, action = {}) {
  switch (action.type) {
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
    case SHOPPING_CART_INCREMENT: {
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
    case SHOPPING_CART_DECREMENT: {
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
      return state.all.filter(aProductInCart => aProductInCart.id !== action.payload.product.id);
    }
    default:
      return state;
  }
}

export default shoppingCartReducer;
