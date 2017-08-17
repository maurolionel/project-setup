import { GET_CATEGORIES } from './actionTypes';
import { convertStringToNumber } from '../utils';

const initialState = {
  all: null
};

const mapCategoryFromApiToState = ({ id, name, is_active }) => ({
  id: convertStringToNumber(id),
  name,
  isActive: Boolean(convertStringToNumber(is_active))
});

function categoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_CATEGORIES: {
      return {
        ...state,
        all: action.payload.result.map(mapCategoryFromApiToState)
      };
    }
    default: {
      return state;
    }
  }
}

export default categoriesReducer;
