import { SHOPPING_CART_ADD, SHOPPING_CART_REMOVE } from './actionTypes';

const initialState = {
  all: []
};

function shoppingCartReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SHOPPING_CART_ADD: {
      const newProduct = action.payload;
      return {
        ...state,
        all: [
          ...state.all,
          newProduct
        ]
      };
    }
    case SHOPPING_CART_REMOVE: {
      return state;
    }
    default:
      return state;
  }
}

export default shoppingCartReducer;
