import { SAVE_SHIPPING } from './actionTypes';

const initialState = {
  shipping: {},
  payment: {}
};

function salesReducer(state = initialState, action = {}) {
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

export default salesReducer;
