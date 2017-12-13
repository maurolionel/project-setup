import { HIDE_CART_POPOVER, SHOW_CART_POPOVER } from './actionTypes';

const initialState = {
  isVisible: false
};

export default function cartPopover(state = initialState, action = {}) {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
    case HIDE_CART_POPOVER:
      return {
        ...state,
        isVisible: false
      };
    case SHOW_CART_POPOVER:
      return {
        ...state,
        isVisible: true
      };
    default:
      return state;
  }
}
