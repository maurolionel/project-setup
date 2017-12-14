import { GET_BRANDS } from './actionTypes';
import { convertStringToNumber } from '../utils';

const initialState = {
  all: []
};

const mapBrandFromApiToState = brand => ({
  ...brand,
  id: convertStringToNumber(brand.id),
  order: convertStringToNumber(brand.order)
});

function brandsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_BRANDS: {
      return {
        ...state,
        all: action.payload.result.map(mapBrandFromApiToState)
      };
    }
    default: {
      return state;
    }
  }
}

export default brandsReducer;
