<<<<<<< HEAD
import {
  ADD_PURCHASE,
  CREATE_PREFERENCE_REQUEST,
  CREATE_PREFERENCE_SUCCESS,
  SET_INPUT_VALUE,
  SET_PAYMENT_TYPE
} from './actionTypes';
=======
import { ADD_PURCHASE, CREATE_PREFERENCE_REQUEST, CREATE_PREFERENCE_SUCCESS, SET_INPUT_VALUE, SELECT_PAYMENT } from './actionTypes';
>>>>>>> Persiste el payment type seleccionado en el store

const initialState = {
  data: {
    name: '',
    surname: '',
    email: '',
    tel: '',
    province: 0,
    location: 0,
    calle: '',
    altura: '',
    piso: '',
    departamento: '',
    zipCode: '',
    shippingForm: 0,
    shippingMethod: 0
  },
  paymentType: 0,
  url: '',
  isLoadingMP: false
};

function purchaseReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_PURCHASE:
      return {
        ...state,
        paymentType: action.payload.paymentType
      };
    case CREATE_PREFERENCE_REQUEST:
      return {
        ...state,
        isLoadingMP: true
      };
    case CREATE_PREFERENCE_SUCCESS:
      return {
        ...state,
        url: action.payload,
        isLoadingMP: false
      };
    case SET_INPUT_VALUE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.type]: action.payload.value
        }
      };
    case SELECT_PAYMENT:
      return {
        ...state,
        paymentType: parseInt(action.payload.paymentType, 10)
      };
    default:
      return state;
  }
}

export default purchaseReducer;
