import { SET_USER } from '../services/actionTypes';

const initialState = {
  username: null
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        username: action.payload.username
      }
    }
    default: {
      return state;
    }
  }
}
