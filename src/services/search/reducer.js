import { SEARCH_QUERY_SUCCESS } from './actionTypes';

const initialState = {
  query: ''
};

function search(state = initialState, action = {}) {
  switch (action.types) {
    case SEARCH_QUERY_SUCCESS:
      return {
        ...state,
        query: action.payload.query
      };
    default:
      return state;
  }
}

export default search;
