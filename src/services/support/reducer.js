import { SELECT_GUIDE_SUCCESS, GET_GUIDES_REQUEST, GET_GUIDES_SUCCESS, GET_GUIDES_ERROR } from './actionTypes';
import { initialState, mapGuidesFromApi, mapModelGuidesFromApi } from './utils';

function supportReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_GUIDES_REQUEST:
      return {
        ...state,
        isLoadingGuides: true
      };
    case GET_GUIDES_SUCCESS:
      return {
        ...state,
        guides: action.payload,
        isLoadingGuides: false
      };
    case GET_GUIDES_ERROR:
      return {
        ...state,
        isLoadingGuides: false
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
