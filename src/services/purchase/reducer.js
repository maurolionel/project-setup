import {
  ADD_PURCHASE,
  DELETE_PURCHASE,
  CREATE_PREFERENCE_REQUEST,
  CREATE_PREFERENCE_SUCCESS,
  GET_PREFERENCE_REQUEST,
  GET_PREFERENCE_SUCCESS,
  SET_INPUT_VALUE,
  SELECT_PAYMENT
} from './actionTypes';

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
  preference: {
    id: '',
    url: ''
  },
  isLoadingMP: false
};

function purchaseReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_PURCHASE:
      return {
        ...state,
        paymentType: action.payload.paymentType
      };
    case GET_PREFERENCE_REQUEST:
    case CREATE_PREFERENCE_REQUEST:
      return {
        ...state,
        isLoadingMP: true
      };
    case CREATE_PREFERENCE_SUCCESS:
      return {
        ...state,
        preference: {
          ...state.preference,
          id: action.payload.id,
          url: action.payload.url
        },
        isLoadingMP: false
      };
    case GET_PREFERENCE_SUCCESS:
      console.log('GET_PREFERENCE_SUCCESS', action.payload);
      return state;
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
    case DELETE_PURCHASE:
      return initialState;
    default:
      return state;
  }
}

export default purchaseReducer;
