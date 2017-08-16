import { GET_BRANDS } from './actionTypes';

const initialState = {
  all: null
};

function brandsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_BRANDS: {
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

export default brandsReducer;
