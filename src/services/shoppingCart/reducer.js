import { SHOPPING_CART_INCREASE, SHOPPING_CART_ADD, SHOPPING_CART_DECREASE, SHOPPING_CART_REMOVE } from './actionTypes';

const initialState = {
  all: [{
    id: 2,
    mlId: null,
    categoryId: 1,
    brandId: 1,
    name: 'CISS Epson XP211 - 100cc',
    price: 599,
    date: '2017-06-01',
    description: 'Sin descripción',
    isActive: true,
    isOfferMode: false,
    hasStock: true,
    quantity: 1
  }]
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
    default:
      return state;
  }
}

export default shoppingCartReducer;
