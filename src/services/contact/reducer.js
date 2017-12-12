import {
  SUBMIT_FORM_REQUEST,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_ERROR,
  UPDATE_INPUT_VALUE
} from './actionTypes';

const initialState = {
  data: {
    name: '',
    surname: '',
    email: '',
    reason: '0',
    message: ''
  },
  isError: false,
  isLoading: false,
  isSuccess: false
};

function contact(state = initialState, action = {}) {
  switch (action.type) {
    case SUBMIT_FORM_REQUEST:
      return {
        ...state,
        isError: false,
        isLoading: true,
        isSuccess: false
      };
    case SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        data: initialState.data,
        isError: false,
        isLoading: false,
        isSuccess: true
      };
    case SUBMIT_FORM_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
        isSuccess: false
      };
    case UPDATE_INPUT_VALUE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.name]: action.payload.value
        }
      };
    default:
      return state;
  }
}

export default contact;
