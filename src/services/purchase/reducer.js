import { SAVE_SHIPPING, CREATE_PREFERENCE_REQUEST, CREATE_PREFERENCE_SUCCESS } from './actionTypes';

const initialState = {
  shipping: {},
  url: '',
  isLoadingMP: false
};

function purchaseReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_SHIPPING:
      return {
        ...state,
        shipping: action.payload.shipping
      };
    case CREATE_PREFERENCE_REQUEST:
      return {
        ...state,
        isLoadingMP: true
      };
    case CREATE_PREFERENCE_SUCCESS:
      return {
        ...state,
        url: action.payload,
        isLoadingMP: false
      };
    default:
      return state;
  }
}

export default purchaseReducer;
