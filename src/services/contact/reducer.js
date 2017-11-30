import { SUBMIT_FORM_SUCCESS, UPDATE_INPUT_VALUE } from './actionTypes';

const initialState = {
  data: {
    name: '',
    surname: '',
    email: '',
    reason: 0,
    message: ''
  }
};

function contact(state = initialState, action = {}) {
  switch (action.type) {
    case SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        data: initialState.data
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
