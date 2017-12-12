import { GET_CATEGORIES } from './actionTypes';
import { convertStringToNumber, replaceSpaceWithMiddleDash } from '../utils';

const initialState = {
  all: null
};

const mapCategoryFromApiToState = ({ id, name, cover, priority }) => ({
  id: convertStringToNumber(id),
  cover,
  name: replaceSpaceWithMiddleDash(name).toLowerCase(),
  priority: convertStringToNumber(priority)
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
