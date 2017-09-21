import { SET_BRAND, GET_INSTRUCTIVES_SUCCESS } from './actionTypes';

const initialState = {
  brandId: 0,
  productResults: []
};

const mapProductResultsFromApi = (prev, next) => [...prev, next.name];

function supportReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_BRAND:
      return {
        ...state,
        brandId: parseInt(action.payload.brandId, 10)
      };
    case GET_INSTRUCTIVES_SUCCESS:
      return {
        ...state,
        productResults: action.payload.result
      };
    default:
      return state;
  }
}

export default supportReducer;
