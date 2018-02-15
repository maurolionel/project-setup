import {
  EXPLORE_GUIDES_FAILURE,
  EXPLORE_GUIDES_STARTED,
  EXPLORE_GUIDES_SUCCESS,
  EXPLORE_PRODUCTS_FAILURE,
  EXPLORE_PRODUCTS_STARTED,
  EXPLORE_PRODUCTS_SUCCESS
} from './actionTypes';

const initialState = {
  guides: {
    all: [],
    isLoading: false
  },
  products: {
    all: [],
    isLoading: false
  }
};

function search(state = initialState, action = {}) {
  switch (action.types) {
    case EXPLORE_GUIDES_FAILURE:
      return {
        ...state,
        guides: {
          ...state.guides,
          isLoading: false
        }
      };
    case EXPLORE_GUIDES_STARTED:
      return {
        ...state,
        guides: {
          ...state.guides,
          isLoading: true
        }
      };
    case EXPLORE_GUIDES_SUCCESS:
      return {
        ...state,
        guides: {
          ...state.guides,
          all: action.payload.guides,
          isLoading: false
        }
      };
    case EXPLORE_PRODUCTS_FAILURE:
      return {
        ...state,
        products: {
          ...state.products,
          isLoading: false
        }
      };
    case EXPLORE_PRODUCTS_STARTED:
      return {
        ...state,
        products: {
          ...state.products,
          isLoading: true
        }
      };
    case EXPLORE_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: {
          ...state.products,
          all: action.payload.result,
          isLoading: false
        }
      };
    default:
      return state;
  }
}

export default search;
