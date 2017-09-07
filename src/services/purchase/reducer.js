import { SAVE_SHIPPING } from './actionTypes';

const initialState = {
  shipping: {},
  payment: {}
};

function purchaseReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_SHIPPING:
      return {
        ...state,
        shipping: action.payload.shipping
      };
    default:
      return state;
  }
}

export default purchaseReducer;
