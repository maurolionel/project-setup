import { GET_PRODUCTS } from './actionTypes';

const initialState = {
  all: null
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        all: action.payload.result
      };
    }
    default: {
      return state;
    }
  }
}

export default productsReducer;
