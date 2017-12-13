import { GET_PRODUCT_DETAILS_FAILURE, GET_PRODUCT_DETAILS_SUCCESS } from './actionTypes';

const initialState = {
  data: {},
  isLoading: true
};

export default function productDetail(state = initialState, action = {}) {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        data: action.payload.result[0],
        isLoading: false
      };
    default:
      return state;
  }
}
