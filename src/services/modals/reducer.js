import {
  MODAL_SCHEDULES_OPEN,
  MODAL_SCHEDULES_CLOSE,
  MODAL_SHIPPINGS_CLOSE,
  MODAL_SHIPPINGS_OPEN,
  MODAL_PAYMENT_CLOSE,
  MODAL_PAYMENT_OPEN,
  MODAL_PURCHASE_OPEN,
  MODAL_PURCHASE_CLOSE,
  MODAL_CLOSE_ALL
} from './actionTypes';

const initialState = {
  schedules: {
    isOpen: false
  },
  shippings: {
    isOpen: false
  },
  payment: {
    isOpen: false
  },
  purchase: {
    isOpen: false
  }
};

function modals(state = initialState, action = {}) {
  switch (action.type) {
    case MODAL_SCHEDULES_OPEN:
      return {
        ...state,
        schedules: {
          isOpen: true
        }
      };
    case MODAL_SCHEDULES_CLOSE:
      return {
        ...state,
        schedules: {
          isOpen: false
        }
      };
    case MODAL_SHIPPINGS_OPEN:
      return {
        ...state,
        shippings: {
          isOpen: true
        }
      };
    case MODAL_SHIPPINGS_CLOSE:
      return {
        ...state,
        shippings: {
          isOpen: false
        }
      };
    case MODAL_PAYMENT_OPEN:
      return {
        ...state,
        payment: {
          isOpen: true
        }
      };
    case MODAL_PAYMENT_CLOSE:
      return {
        ...state,
        payment: {
          isOpen: false
        }
      };
    case MODAL_PURCHASE_OPEN:
      return {
        ...state,
        purchase: {
          isOpen: true
        }
      };
    case MODAL_PURCHASE_CLOSE:
      return {
        ...state,
        purchase: {
          isOpen: false
        }
      };
    case MODAL_CLOSE_ALL:
      return initialState;
    default:
      return state;
  }
}

export default modals;
