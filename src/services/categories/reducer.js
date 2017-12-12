import { GET_CATEGORIES } from './actionTypes';
import { convertStringToNumber, replaceSpaceWithMiddleDash } from '../utils';

const initialState = {
  all: null
};

const mapCategoryFromApiToState = ({ id, name }) => ({
  id: convertStringToNumber(id),
  name: replaceSpaceWithMiddleDash(name).toLowerCase()
});

function categoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_CATEGORIES: {
      return {
        ...state,
        all: action.payload.map(mapCategoryFromApiToState)
      };
    }
    default: {
      return state;
    }
  }
}

export default categoriesReducer;
