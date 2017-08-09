import { GET_CATEGORIES } from './actionTypes';

const initialState = {
  all: null
};

export default function categoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_CATEGORIES: {
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
