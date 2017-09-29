import { SELECT_GUIDE_SUCCESS, GET_GUIDES_SUCCESS } from './actionTypes';
import { initialState, mapGuidesFromApi, mapModelGuidesFromApi } from './utils';

function supportReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_GUIDES_SUCCESS:
      return {
        ...state,
        guides: action.payload.result.map(mapGuidesFromApi)
      };
    case SELECT_GUIDE_SUCCESS:
      return {
        ...state,
        selectedModelGuides: action.payload.result.map(mapModelGuidesFromApi)
      };
    default:
      return state;
  }
}

export default supportReducer;
