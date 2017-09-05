import { GET_SHIPPING_METHODS } from './actionTypes';
import { convertStringToNumber } from '../utils';

const initialState = {
  all: []
};

const mapMethodsFromApiToState = ({ id, name }) => ({
  id: convertStringToNumber(id),
  name
});

function shippingMethodsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_SHIPPING_METHODS:
      return {
        ...state,
        all: action.payload.result.map(mapMethodsFromApiToState)
      };
    default:
      return state;
  }
}

export default shippingMethodsReducer;
