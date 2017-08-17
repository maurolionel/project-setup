import { GET_BRANDS } from './actionTypes';
import { convertStringToNumber, replaceMiddleDashWithSpace } from '../utils';

const initialState = {
  all: null
};

const mapBrandFromApiToState = ({ id, name, is_active }) => ({
  id: convertStringToNumber(id),
  name: replaceMiddleDashWithSpace(name),
  isActive: Boolean(convertStringToNumber(is_active))
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
