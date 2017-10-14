import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, SET_VISIBILITY_FILTER } from './actionTypes';
import { initialState, mapProductFromApiToState } from './utils';

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        all: action.payload.result.map(mapProductFromApiToState),
        isFetching: false,
        isFetchingError: false
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        isFetchingError: true,
        isFetching: false
      };
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.payload.categoryId
      };
    default:
      return state;
  }
}

export default productsReducer;
