import { SET_BRAND } from './actionTypes';

const initialState = {
  brandId: 0
};

function supportReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_BRAND:
      return {
        brandId: parseInt(action.payload.brandId, 10)
      };
    default:
      return state;
  }
}

export default supportReducer;
